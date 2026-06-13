

export interface ServiceData {
  slug: string;
  
  title: string;
  shortDesc: string;
  fullDesc: string;
  accent: string;
  features: string[];
  images: string[];   // slideshow images (3–5)
  gallery: { src: string; name: string }[];  // collage images with hover names
}

export const SERVICES: ServiceData[] = [
  {
    slug: "uv-printing",
    title: "UV Printing",
    shortDesc: "High-resolution UV printing on 40+ surfaces — acrylic, wood, glass, metal, PVC, leather and more.",
    fullDesc: `Our UV flatbed and roll-to-roll printing delivers photographic-quality output directly on virtually any surface. Using the latest UV-cured inks, we achieve vivid colours, crisp fine detail, and a scratch-resistant finish that lasts for years — indoors or outdoors. White ink and varnish effects add depth and dimension unavailable with conventional print methods. No minimum order quantity; every job, large or small, gets the same attention to colour accuracy and surface adhesion.`,
    accent: "",
    features: ["Print on 40+ surfaces", "600 DPI resolution", "White ink & varnish effects", "No minimum order", "Scratch-resistant output", "UV roll-to-roll on SAV & OWV vinyl"],
    images: [
        "/uv-printing/uv-printing-board-acrylic-arvind-advertizing-delhi.webp",
      "/uv-printing/uv-printing-menu-card-acrylic-arvind-advertizing.webp",
      "/uv-printing/uv-printing-cylindrical-object-customized-gift-delhi.webp",
        "/uv-printing/uv-printed-packaging-box-food-brand-india.webp",
        "/uv-printing/uv-printing-trophy-sticker-branding-arvind-delhi.webp",
    ],
    gallery: [
      { src: "/uv-printing/uv-printing-menu-card-acrylic-arvind-advertizing.webp",       name: "Menu Card on Acrylic" },
      { src: "/uv-printing/uv-printing-board-acrylic-arvind-advertizing-delhi.webp",         name: "Retail Shelf Branding" },
      { src: "/uv-printing/uv-printing-cylindrical-object-customized-gift-delhi.webp",    name: "Cylindrical Gift Print" },
      { src: "/uv-printing/uv-printed-packaging-box-food-brand-india.webp",               name: "Food Brand Packaging" },
      { src: "/uv-printing/uv-printing-trophy-sticker-branding-arvind-delhi.webp",           name: "Trophy Sticker Branding" },
      {src:"/uv-printing/uv2.webp", name:"UV Printed Acrylic Menu Card"},
      {src:"/uv-printing/uv3.webp", name:"UV Printed Cylindrical Object"},
      {src:"/uv-printing/uv4.webp", name:"UV Printed Packaging Box"},
      {src:"/uv-printing/uv5.webp", name:"UV Printed Trophy Sticker"},
      {src:"/uv-printing/uv6.webp", name:"UV Printed Acrylic Board"},
      {src:"/uv-printing/uv7.webp", name:"UV Printed Acrylic Menu Card"},
      {src:"/uv-printing/uv8.webp", name:"UV Printed Cylindrical Object"},
      {src:"/uv-printing/uv9.webp", name:"UV Printed Packaging Box"},
      {src:"/uv-printing/uv11.webp", name:"UV Printed Trophy Sticker"},
    ],
  },
  {
    slug: "flex-printing",
    
    title: "Flex and Vinyl Printing",
    shortDesc: "Indoor & outdoor flex banners, hoardings and vinyl — vivid, weather-resistant, large-format.",
    fullDesc: `We print on premium Star and Taiwan flex materials using starfire-solvent, eco-solvent, and latex inks. The result is rich, saturated colour that holds up against UV exposure, rain, and dust for years. Options include single-side and double-side flex, backlit and frontlit materials, self-adhesive vinyl, and one-way vision vinyl for window graphics. From small retail banners to massive highway hoardings, our wide-format printers handle any dimension with consistent quality across every metre.`,
    accent: "",
    features: ["Single & double-side flex/vinyl", "Backlit & frontlit options", "Star & Taiwan flex material", "Self-adhesive & OWV vinyl", "UV-resistant inks", "Any size — no limits"],
    images: [
      "/flex-printing/outdoor-flex-banner-hoarding-market-delhi.webp",
        "/flex-printing/cera-flex-banner-retail-store-branding-india.webp",
        "/flex-printing/flex-washroom-door-printed-arvind-advertizing-delhi.webp",
      "/flex-printing/outdoor-flex-banner-brand-promotion-delhi.webp",
      "/flex-printing/flex-printing-promotional-standee-product-launch.webp",
    ],
    gallery: [
      { src: "/flex-printing/outdoor-flex-banner-hoarding-market-delhi.webp",           name: "Outdoor Market Hoarding" },
      { src: "/flex-printing/cera-flex-banner-retail-store-branding-india.webp",        name: "Cera Retail Store Banner" },
      { src: "/flex-printing/flex-washroom-door-printed-arvind-advertizing-delhi.webp", name: "Washroom Door Print" },
      { src: "/flex-printing/outdoor-flex-banner-brand-promotion-delhi.webp",           name: "Brand Promotion Banner" },
      { src: "/flex-printing/flex-printing-promotional-standee-product-launch.webp",    name: "Product Launch Standee" },
      {src:"/flex-printing/flex1.webp", name:"Outdoor Flex Banner"},
      {src:"/flex-printing/flex2.webp", name:"Retail Store Flex Banner"},
      {src:"/flex-printing/flex3.webp", name:"Printed Washroom Door"},
      {src:"/flex-printing/flex4.webp", name:"Brand Promotion Flex Banner"},
      {src:"/flex-printing/flex5.webp", name:"Promotional Standee"},
      {src:"/flex-printing/flex6.webp", name:"Outdoor Flex Hoarding"},
    ],
  },
  {
    slug: "sign-boards",
    
    title: "Sign Boards",
    shortDesc: "LED glow signs, ACP boards, acrylic letters, neon-flex, SS cut-outs — fabricated and installed.",
    fullDesc: `From a simple sun board to a fully-illuminated LED channel letter sign, we design, fabricate, and install every type of commercial signage. Our in-house fabrication unit handles ACP composite cladding, MDF routing, acrylic moulding, and stainless-steel cutting with CNC precision. LED modules are sourced from certified suppliers for long life and consistent brightness. We survey the site, handle municipal permissions where required, and provide a complete turnkey installation including wiring and testing.`,
    accent: "",
    features: ["LED & non-lit glow signs", "3D acrylic & SS letters", "ACP composite panels", "Neon-flex channel letters", "CNC fabrication", "Turnkey installation"],
    images: [
         "/sign-board/led-sign-board-galleria-noida-arvind-delhi.webp",
      "/sign-board/outdoor-directional-sign-board-tourism-delhi.webp",
      "/sign-board/led-glow-sign-board-usha-brand-retail-shop.webp",
      "/sign-board/acp-sign-board-shop-front-interior-branding.webp",
      "/sign-board/outdoor-sign-board-zebra-thread-arvind-delhi.webp",
    ],
    gallery: [
      { src: "/sign-board/outdoor-directional-sign-board-tourism-delhi.webp",      name: "Tourism Directional Board" },
      { src: "/sign-board/led-glow-sign-board-usha-brand-retail-shop.webp",        name: "Usha LED Glow Sign" },
      { src: "/sign-board/led-sign-board-galleria-noida-arvind-delhi.webp",    name: "Retail Backlit Sign" },
      { src: "/sign-board/acp-sign-board-shop-front-interior-branding.webp",       name: "ACP Shop Front Board" },
      { src: "/sign-board/outdoor-sign-board-zebra-thread-arvind-delhi.webp",     name: "Office Wayfinding Sign" },
      {src:"/sign-board/sb1.webp", name:"Retail Store Sign Board"},
      {src:"/sign-board/sb2.webp", name:"Retail Store Sign Board"},
      {src:"/sign-board/sb3.webp", name:"Retail Store Sign Board"},
      {src:"/sign-board/sb4.webp", name:"Retail Store Sign Board"},
      {src:"/sign-board/sb5.webp", name:"Retail Store Sign Board"},
      {src:"/sign-board/sb6.webp", name:"Retail Store Sign Board"},
      {src:"/sign-board/sb7.webp", name:"Retail Store Sign Board"},
      {src:"/sign-board/sb8.webp", name:"Retail Store Sign Board"},
      {src:"/sign-board/sb9.webp", name:"Retail Store Sign Board"},
      {src:"/sign-board/sb10.webp", name:"Retail Store Sign Board"},
      {src:"/sign-board/sb11.webp", name:"Retail Store Sign Board"},
      {src:"/sign-board/sb12.webp", name:"Retail Store Sign Board"},

    ],
  },
  {
    slug: "event-branding",
   
    title: "Event Branding",
    shortDesc: "End-to-end branding for corporate events, trade shows, exhibitions — concept to installation.",
    fullDesc: `We manage the complete branding lifecycle for events of any scale — from intimate product launches to multi-hall trade exhibitions. Our team handles concept and design, material production, logistics, on-site installation, and post-event dismantling. We supply stage backdrops and sets, branded entry gates, roll-up standees, exhibition stalls, canopy structures, branded furniture, and comprehensive directional signage systems. All materials are built for reuse so your investment stretches across multiple events.`,
    accent: "",
    features: ["Stage backdrops & sets", "Exhibition stall design & build", "Roll-ups, standees & gates", "Canopy, table tops & racks", "Directional signage systems", "Dismantling & storage"],
    images: [
        "/event-branding/corporate-event-branding-store-front-signage.webp",
      "/event-branding/event-branding-outdoor-canopy-stall-setup-delhi.webp",
      "/event-branding/event-branding-birthday-party-arvind-advertizing-delhi.webp",
      "/event-branding/trade-show-exhibition-stall-led-display-branding.webp",
      "/event-branding/exhibition-booth-branding-retail-product-display.webp",
      
      "/event-branding/adani-brand-event-backdrop-display-branding.webp",
    ],
    gallery: [
      { src: "/event-branding/event-branding-outdoor-canopy-stall-setup-delhi.webp",       name: "Outdoor Canopy Setup" },
      { src: "/event-branding/event-branding-birthday-party-arvind-advertizing-delhi.webp",          name: "Exhibition Stall Branding" },
      { src: "/event-branding/trade-show-exhibition-stall-led-display-branding.webp",       name: "Trade Show LED Stall" },
      { src: "/event-branding/exhibition-booth-branding-retail-product-display.webp",       name: "Retail Product Booth" },
      { src: "/event-branding/corporate-event-branding-store-front-signage.webp",           name: "Corporate Event Signage" },
      { src: "/event-branding/adani-brand-event-backdrop-display-branding.webp",            name: "Adani Brand Backdrop" },
      {src:"/event-branding/eb1.webp", name:"Corporate Event Branding"},
      {src:"/event-branding/eb2.webp", name:"Corporate Event Branding"},
      {src:"/event-branding/eb3.webp", name:"Corporate Event Branding"},
      {src:"/event-branding/eb4.webp", name:"Corporate Event Branding"},
      {src:"/event-branding/eb5.webp", name:"Corporate Event Branding"},
      {src:"/event-branding/eb6.webp", name:"Corporate Event Branding"},
      {src:"/event-branding/eb7.webp", name:"Corporate Event Branding"},
      {src:"/event-branding/eb8.webp", name:"Corporate Event Branding"},
      {src:"/event-branding/eb9.webp", name:"Corporate Event Branding"},
    
      {src:"/event-branding/eb11.webp", name:"Corporate Event Branding"},
      {src:"/event-branding/eb12.webp", name:"Corporate Event Branding"},
      {src:"/event-branding/eb13.webp", name:"Corporate Event Branding"},

    ],
  },
  {
    slug: "digital-paper-printing",
    
    title: "Digital Paper Printing",
    shortDesc: "Premium offset & digital printing — business cards, brochures, catalogues, packaging & stationery.",
    fullDesc: `With both offset and digital presses in-house, we handle every paper-based print requirement from a 100-card visiting card run to a 50,000-copy catalogue. We stock 50+ paper grades from 90 GSM uncoated through to 400 GSM art board, with finishes including gloss and matte lamination, soft-touch, UV spot, aqueous coating, and foil stamping. Our colour management workflow ensures brand colours are reproduced consistently across every print run, every time.`,
    accent: "",
    features: ["Business cards & letterheads", "Brochures & catalogues", "Booklets, calendars & diaries", "Packaging & boxes", "Danglers & tent cards", "UV spot & foil finishing"],
    images: [
      "/paper-printing/business-card-premium-offset-printing-delhi.webp",
      "/paper-printing/brochure-catalogue-offset-printing-arvind-advertizing.webp",
      "/paper-printing/letterhead-corporate-stationery-printing-delhi.webp",
      "/paper-printing/packaging-box-marketing-collateral-printing-india.webp",
      "/paper-printing/price-tag-dangler-retail-promotional-printing-delhi.webp",
    ],
    gallery: [
      { src: "/paper-printing/business-card-premium-offset-printing-delhi.webp",              name: "Premium Business Cards" },
      { src: "/paper-printing/brochure-catalogue-offset-printing-arvind-advertizing.webp",    name: "Brochure & Catalogue" },
      { src: "/paper-printing/letterhead-corporate-stationery-printing-delhi.webp",           name: "Corporate Stationery" },
      { src: "/paper-printing/packaging-box-marketing-collateral-printing-india.webp",        name: "Packaging & Boxes" },
      { src: "/paper-printing/price-tag-dangler-retail-promotional-printing-delhi.webp",      name: "Price Tags & Danglers" },
      {src:"/paper-printing/dp1.webp", name:"Business Cards & Stationery"},
      {src:"/paper-printing/dp2.webp", name:"Brochures & Catalogues"},
      {src:"/paper-printing/dp3.webp", name:"Corporate Stationery"},
      {src:"/paper-printing/dp4.webp", name:"Packaging & Boxes"},
      {src:"/paper-printing/dp5.webp", name:"Retail Danglers & Tags"},
      {src:"/paper-printing/dp6.webp", name:"Brochures & Catalogues"},
      {src:"/paper-printing/dp7.webp", name:"Business Cards & Stationery"},
      {src:"/paper-printing/dp8.webp", name:"Packaging & Boxes"},
      {src:"/paper-printing/dp9.webp", name:"Brochures & Catalogues"},
      {src:"/paper-printing/dp10.webp", name:"Business Cards & Stationery"},

    ],
  },
  {
    slug: "corporate-branding",
    
    title: "Retail & Corporate Branding",
    shortDesc: "Complete brand-space execution for retail chains, offices & franchise outlets across India.",
    fullDesc: `Consistent visual identity across every location is the foundation of a strong brand. We execute complete brand-space rollouts for retail chains, corporate campuses, showrooms, and franchise networks — covering shopfront signage, interior wall graphics and murals, wayfinding and directional systems, window displays, and branded environments. Our pan-India execution capability means a single brief translates into identical, on-brand output whether you have 5 outlets or 500.`,
    accent: "",
    features: ["Store front & interior signage", "Wall graphics & murals", "Wayfinding systems", "Window display branding", "Franchise rollout management", "Pan-India execution"],
    images: [
        "/corporate-branding/led-wall-corporate-event-branding-interior-delhi.webp",
      "/corporate-branding/mascot-branding-corporate-character-display-delhi.webp",
      "/corporate-branding/corporate-branding-product-display-standee-india.webp",
      "/corporate-branding/retail-store-branding-wall-graphics-signage-delhi.webp",
      
      "/corporate-branding/digital-display-kiosk-corporate-branding-india.webp",
      "/corporate-branding/office-interior-branding-wall-texture-corporate.webp",
    ],
    gallery: [
      { src: "/corporate-branding/mascot-branding-corporate-character-display-delhi.webp",    name: "Corporate Mascot Display" },
      { src: "/corporate-branding/corporate-branding-product-display-standee-india.webp",     name: "Product Display Standee" },
      { src: "/corporate-branding/retail-store-branding-wall-graphics-signage-delhi.webp",    name: "Store Wall Graphics" },
      { src: "/corporate-branding/led-wall-corporate-event-branding-interior-delhi.webp",     name: "LED Wall Interior" },
      { src: "/corporate-branding/digital-display-kiosk-corporate-branding-india.webp",       name: "Digital Display Kiosk" },
      { src: "/corporate-branding/office-interior-branding-wall-texture-corporate.webp",      name: "Office Interior Branding" },
      {src:"/corporate-branding/cb1.webp", name:"Retail Store Branding"},
      {src:"/corporate-branding/cb2.webp", name:"Retail Store Branding"},
      {src:"/corporate-branding/cb3.webp", name:"Retail Store Branding"},
      {src:"/corporate-branding/cb4.webp", name:"Retail Store Branding"},
      {src:"/corporate-branding/cb5.webp", name:"Retail Store Branding"},
      {src:"/corporate-branding/cb6.webp", name:"Retail Store Branding"},
      {src:"/corporate-branding/cb7.webp", name:"Retail Store Branding"},
      {src:"/corporate-branding/cb8.webp", name:"Retail Store Branding"},
      {src:"/corporate-branding/cb9.webp", name:"Retail Store Branding"},
      {src:"/corporate-branding/cb10.webp", name:"Retail Store Branding"},
      {src:"/corporate-branding/cb11.webp", name:"Retail Store Branding"},
      {src:"/corporate-branding/cb12.webp", name:"Retail Store Branding"},
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}