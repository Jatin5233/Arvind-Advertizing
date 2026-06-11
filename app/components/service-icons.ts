// app/components/service-icons.ts
"use client";  // not strictly needed but makes intent clear

import { Printer, Sun, Square, Calendar, FileText, Building2, type LucideIcon } from "lucide-react";

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "uv-printing":        Sun,
  "flex-printing":      Printer,
  "sign-boards":        Square,
  "event-branding":     Calendar,
  "paper-printing":     FileText,
  "digita-paper-printing": FileText,
  "corporate-branding": Building2,
};