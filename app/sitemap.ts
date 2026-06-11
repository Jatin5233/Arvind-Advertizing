import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://arvindadvertizing.com",           lastModified: new Date(), priority: 1.0 },
    { url: "https://arvindadvertizing.com/services",  lastModified: new Date(), priority: 0.9 },
    { url: "https://arvindadvertizing.com/about",     lastModified: new Date(), priority: 0.7 },
    { url: "https://arvindadvertizing.com/machinery", lastModified: new Date(), priority: 0.7 },
  ];
}