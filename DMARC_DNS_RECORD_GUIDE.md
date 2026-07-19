# DMARC DNS Mail Record Setup Guide

To protect your business email domain `arvindadvertizing.com` from spam, spoofing, and email delivery issues, you need to add a DMARC (Domain-based Message Authentication, Reporting, and Conformance) TXT record to your DNS provider (e.g., GoDaddy, Cloudflare, Namecheap, Hostinger).

---

## 📋 Exact DNS Record Configuration

Access your domain DNS zone manager and add a new TXT record with these properties:

| Field / Type | Value | Description |
| :--- | :--- | :--- |
| **Record Type** | `TXT` | Defines a text description record. |
| **Host / Name** | `_dmarc` | The sub-domain target for DMARC queries. |
| **Value / TXT Value** | `v=DMARC1; p=none; rua=mailto:arvind.advertizing@gmail.com; pct=100` | The DMARC policy instruction string. |
| **TTL** | `3600` (or `1 Hour` / `Auto`) | The cache duration for the record. |

---

## 🔍 Parameters Explained

- **`v=DMARC1`**: Standard protocol identifier (must be capitalized).
- **`p=none`**: Policy monitoring mode. It tells recipient servers to deliver emails normally even if they fail SPF/DKIM verification, but send report data to your inbox. This is the safest way to start without blocking legitimate outbound mail.
- **`rua=mailto:arvind.advertizing@gmail.com`**: Specifies the inbox address to receive daily XML aggregate reports detailing who is sending emails on behalf of your domain.
- **`pct=100`**: Applies the policy to 100% of emails sent.
