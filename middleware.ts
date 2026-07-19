import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js Middleware for Referrer Spam Protection & Bot Filtering
 * 
 * Protects www.arvindadvertizing.com from:
 * 1. Referrer Spam (requests with fake/spammy `Referer` headers targeting toxic PBNs, Fiverr links, etc.)
 * 2. Malicious scrapers & aggressive non-index bots polluting analytics and server logs.
 */

// List of keywords/patterns common in referrer spam and toxic PBN domains
const BLOCKED_REFERRER_KEYWORDS = [
  "pbn-network",
  "dofollow-backlinks",
  "buy-backlinks",
  "cheap-seo",
  "fiverr-seo",
  "fiverr-tactics",
  "niche-edits",
  "da-boost",
  "rank-first-page",
  "seo-link-building",
  "getonline.co.in",
  "runningwebsites.net",
  "blacksonwhites.com",
  "mlbroeklike",
  "allwebsitesdirectory.com",
  "casino",
  "viagra",
  "porn",
  "betting",
  "crypto-hack",
];

// List of known aggressive scraper/spam bot User-Agents
const BLOCKED_USER_AGENTS = [
  "MJ12bot",
  "DotBot",
  "Baiduspider",
  "Sogou web spider",
  "YandexBot",
  "Exabot",
  "MegaIndex",
  "BlexBot",
  "SeznamBot",
  "AhrefsBot", // Optional: block heavy SEO crawler scrapers if desired, though standard user agents pass
];

export function middleware(request: NextRequest) {
  const referer = request.headers.get("referer") || "";
  const userAgent = request.headers.get("user-agent") || "";

  const refererLower = referer.toLowerCase();
  const userAgentLower = userAgent.toLowerCase();

  // 1. Check for Referrer Spam (toxic referring domains sending fake traffic)
  if (referer) {
    for (const keyword of BLOCKED_REFERRER_KEYWORDS) {
      if (refererLower.includes(keyword)) {
        // Immediately reject requests originating from known spam referral networks
        return new NextResponse("Access Denied: Spam Referral Detected", { status: 403 });
      }
    }
  }

  // 2. Check for Malicious / Aggressive Scraper Bots
  if (userAgent) {
    for (const bot of BLOCKED_USER_AGENTS) {
      if (userAgentLower.includes(bot.toLowerCase())) {
        return new NextResponse("Access Denied: Automated Scraper Bot", { status: 403 });
      }
    }
  }

  return NextResponse.next();
}

// Ensure middleware only runs on page requests and API routes (skip static assets & images)
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.png, robots.txt, disavow.txt, sitemap.xml
     * - public images/assets
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|disavow.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
