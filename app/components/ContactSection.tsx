"use client";
/**
 * ContactSection
 * ──────────────
 * On submit:
 *  1. Sends an email via EmailJS (no backend needed)
 *  2. Opens WhatsApp with a pre-filled message to +91 9810718141
 *
 * Setup needed (one-time):
 *  • Create a free account at https://emailjs.com
 *  • Add a service (Gmail "arvind.advertizing@gmail.com"), get SERVICE_ID
 *  • Create an email template, get TEMPLATE_ID
 *  • Copy your PUBLIC_KEY from Account > API Keys
 *  • Replace the three constants below
 */

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2, MessageCircle } from "lucide-react";

/* ── EmailJS config – replace with your real values ─────────── */
const EMAILJS_SERVICE_ID  = "service_6tl3ahk";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_6dn0tqa";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "chJkX_ogcXCpLTgMr";   // e.g. "user_AbCdEfGh"

/* ── Business constants ──────────────────────────────────────── */
const WHATSAPP_NUMBER = "919810718141";           // country code + number, no +
const BUSINESS_EMAIL  = "arvind.advertizing@gmail.com";

const SERVICES = [
  "Flex Printing",
  "UV Printing",
  "Sign Boards",
  "Event Branding",
  "Paper Printing",
  "Retail & Corporate Branding",
  "Other",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const EMPTY: FormState = { name: "", phone: "", email: "", service: "", message: "" };

/* ── Helper: load EmailJS SDK on demand ──────────────────────── */
async function sendViaEmailJS(params: Record<string, string>) {
  // Dynamically import so it never runs on the server
  const emailjs = (await import("@emailjs/browser")).default;
  return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, EMAILJS_PUBLIC_KEY);
}

/* ── Helper: open WhatsApp in new tab ────────────────────────── */
function openWhatsApp(form: FormState) {
  const text = encodeURIComponent(
    `*New Enquiry – Arvind Advertizing*\n\n` +
    `👤 *Name:* ${form.name}\n` +
    `📞 *Phone:* ${form.phone}\n` +
    `📧 *Email:* ${form.email}\n` +
    `🖨️ *Service:* ${form.service}\n\n` +
    `📋 *Details:*\n${form.message}`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
}

/* ── Component ───────────────────────────────────────────────── */
export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [form, setForm]     = useState<FormState>(EMPTY);
  const [errMsg, setErrMsg] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      /* 1. Send email */
      await sendViaEmailJS({
  name: form.name,
  phone: form.phone,
  email: form.email,
  service: form.service,
  message: form.message,
});

      /* 2. Open WhatsApp with pre-filled message */
      openWhatsApp(form);

      setStatus("done");
      setForm(EMPTY);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrMsg("Could not send email. Please try WhatsApp directly.");
      setStatus("error");
    }
  };

  /* ── Input/textarea shared classes ── */
  const fieldCls =
    "w-full px-4 py-3 rounded-xl border-2 border-gray-100 " +
    "focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/8 " +
    "outline-none text-sm transition-all placeholder:text-gray-400";

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* ── Header ── */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                           bg-brand-blue/10 text-brand-blue text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold
                         text-brand-charcoal mb-4">
            Start Your Project Today
          </h2>
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
            Fill the form below — we&apos;ll send you an email confirmation
            and open WhatsApp so you can chat instantly.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* ── Form card ── */}
          <AnimatedSection className="lg:col-span-3" direction="left">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 p-8 lg:p-10">

              {/* ── Success state ── */}
              {status === "done" ? (
                <div className="flex flex-col items-center py-16 text-center gap-4">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center
                                  justify-center">
                    <CheckCircle size={44} className="text-emerald-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-charcoal">
                    Enquiry Sent!
                  </h3>
                  <p className="text-gray-500 text-base max-w-xs">
                    Email delivered to{" "}
                    <span className="font-semibold text-brand-charcoal">{BUSINESS_EMAIL}</span>
                    {" "}and WhatsApp opened for instant chat.
                  </p>
                  <div className="flex gap-3 mt-2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                                     bg-emerald-50 text-emerald-700 text-sm font-semibold">
                      <Mail size={14} /> Email sent
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                                     bg-[#25D366]/10 text-[#25D366] text-sm font-semibold">
                      <MessageCircle size={14} /> WhatsApp opened
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">

                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name: "name",  label: "Full Name",    type: "text", ph: "Your Name" },
                      { name: "phone", label: "Phone Number", type: "tel",  ph: "+91 XXXXX XXXXX" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                          {f.label} *
                        </label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={form[f.name as keyof FormState]}
                          onChange={onChange}
                          placeholder={f.ph}
                          required
                          className={fieldCls}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="your@email.com"
                      required
                      className={fieldCls}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      required
                      className={`${fieldCls} bg-white`}
                    >
                      <option value="" disabled>Select a Service</option>
                      {SERVICES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={4}
                      required
                      placeholder="Quantities, sizes, timeline, delivery location..."
                      className={`${fieldCls} resize-none`}
                    />
                  </div>

                  {/* Error banner */}
                  {status === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-xl
                                    bg-red-50 border border-red-100 text-red-700 text-sm">
                      <span className="mt-0.5">⚠️</span>
                      <span>{errMsg}</span>
                    </div>
                  )}

                  {/* Submit row: Email + WhatsApp buttons */}
                  {/* Separate Buttons */}
<div className="flex flex-col sm:flex-row gap-3">

  {/* Email Button */}
  <button
    type="submit"
    disabled={status === "loading"}
    className="flex-1 flex items-center justify-center gap-2 px-6 py-4
               bg-brand-orange hover:bg-brand-orange-hover text-white
               font-bold rounded-xl transition-all duration-200
               hover:-translate-y-0.5 hover:shadow-xl
               hover:shadow-orange-500/25 disabled:opacity-60"
  >
    {status === "loading" ? (
      <>
        <Loader2 size={18} className="animate-spin" />
        Sending Email...
      </>
    ) : (
      <>
        <Mail size={18} />
        Send Email
      </>
    )}
  </button>

  {/* WhatsApp Button */}
  <button
    type="button"
    onClick={() => {
      if (!form.name || !form.message) {
        alert("Please fill at least name and project details.");
        return;
      }

      openWhatsApp(form);
    }}
    className="flex-1 flex items-center justify-center gap-2 px-6 py-4
               bg-[#25D366] hover:bg-[#20ba5a] text-white
               font-bold rounded-xl transition-all duration-200
               hover:-translate-y-0.5 hover:shadow-xl
               hover:shadow-green-500/25"
  >
    <MessageCircle size={18} />
    WhatsApp
  </button>

</div>

                  <p className="text-xs text-gray-400 text-center">
                    Submitting sends an email to{" "}
                    <span className="text-brand-charcoal font-medium">{BUSINESS_EMAIL}</span>{" "}
                    and opens WhatsApp chat with{" "}
                    <span className="text-brand-charcoal font-medium">+91 98107 18141</span>
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* ── Info sidebar ── */}
          <AnimatedSection className="lg:col-span-2 flex flex-col gap-5" direction="right">

            {/* Contact cards */}
            {[
              {
                Icon:  Phone,
                title: "Call Us",
                lines: ["+91 98107 18141"],
                href:  "tel:+919810718141",
                color: "bg-brand-blue/8",
                iconColor: "text-brand-blue",
              },
              {
                Icon:  Mail,
                title: "Email Us",
                lines: ["arvind.advertizing@gmail.com"],
                href:  "mailto:arvind.advertizing@gmail.com",
                color: "bg-brand-blue/8",
                iconColor: "text-brand-blue",
              },
              {
                Icon:  MessageCircle,
                title: "WhatsApp",
                lines: ["+91 98107 18141"],
                href:  `https://wa.me/${WHATSAPP_NUMBER}`,
                color: "bg-[#25D366]/10",
                iconColor: "text-[#25D366]",
              },
              {
                Icon:  MapPin,
                title: "Visit Us",
                lines: [
                  "First Floor, A-1/22",
                  "Khajoori, Pushta Road",
                  "Delhi – 110053",
                ],
                href:  null,
                color: "bg-brand-blue/8",
                iconColor: "text-brand-blue",
              },
            ].map((card) => {
              const { Icon } = card;
              return (
                <div
                  key={card.title}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100
                             flex items-start gap-4 hover:shadow-md
                             hover:border-brand-orange/20 transition-all duration-200"
                >
                  <div className={`w-11 h-11 ${card.color} rounded-xl flex items-center
                                   justify-center shrink-0`}>
                    <Icon size={20} className={card.iconColor} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand-charcoal text-sm mb-1">
                      {card.title}
                    </h4>
                    {card.title === "Visit Us" ? (
                      <address className="not-italic text-gray-500 text-sm leading-relaxed"
                               itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <span itemProp="streetAddress">First Floor, A-1/22, Khajoori, Pushta Road</span>, <span itemProp="addressLocality">Delhi</span> – <span itemProp="postalCode">110053</span>
                      </address>
                    ) : (
                      card.lines.map((line) =>
                        card.href ? (
                          <a
                            key={line}
                            href={card.href}
                            target={card.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="block text-gray-500 text-sm hover:text-brand-orange
                                       transition-colors"
                            {...(card.title === "Call Us" ? { itemProp: "telephone" } : {})}
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-gray-500 text-sm">{line}</p>
                        )
                      )
                    )}
                  </div>
                </div>
              );
            })}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-52">
              <iframe
                src="https://www.google.com/maps?q=First+Floor,+ARVIND+ADVERTIZING,+A-1/22,+Pushta+Rd,+near+Khajoori,+Bhajanpura,+Chowk,+Delhi,+110053&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arvind Advertizing Location"
              />
            </div>

          </AnimatedSection>
        </div>

        {/* ── EmailJS Setup Guide (remove after configuring) ── */}
        
      </div>
    </section>
  );
}
