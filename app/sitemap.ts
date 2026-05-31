import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://yourdomain.com",           lastModified: new Date(), priority: 1.0 },
    { url: "https://yourdomain.com/services",  lastModified: new Date(), priority: 0.9 },
    { url: "https://yourdomain.com/about",     lastModified: new Date(), priority: 0.7 },
    { url: "https://yourdomain.com/machinery", lastModified: new Date(), priority: 0.7 },
  ];
}