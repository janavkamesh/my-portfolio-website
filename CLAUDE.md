# Portfolio Website — Claude Context

> Auto-loaded by Claude Code. Read this before touching any file.

## Stack
- React 19 + TypeScript (TSX), Tailwind CSS 3.4, Vite 8
- Entry: `src/main.jsx` → `src/App.jsx`
- Components: `src/components/` (Hero, Projects, Services, Cta, About, TopNavBar, Footer)
- Static assets: `public/images/` (tech1-9.png, project images, SVG service icons)
- Dev server: `npm run dev` → port 5173

## Page Layout (top → bottom)
```
TopNavBar (fixed, hides on scroll-down, backdrop-blur)
Hero       (full-screen, marquee tech stack, floating pain-point tags)
Projects   (2×2 grid of 4 live project cards)
Services   (3-col grid, 6 service cards)
Cta        (dark section #0C0F0F, call-to-action)
About      (2-col: text left, profile image right)
Footer     (dark #030712, social links)
```

## Design System

### Colors (tailwind.config.js)
| Token | Hex | Use |
|---|---|---|
| `brandBlack` | #1C1B1B | Headings, primary text |
| `brandGreen` | #006D47 | Primary accent, CTA, hover states |
| `brandGreenDark` | #006C49 | Green hover |
| `brandDarkMuted` | #3C4A42 | Body text, descriptions |
| `heading` | #2D3435 | Section headings |
| `muted` | #596061 | Secondary text |
| `mutedLight` | #737373 | Tertiary text |
| `grayBg` | #EAE7E7 | Light gray fills |
| `cardBg` | #F6F3F2 | Tag pills, card fills |
| `bgMain` | #F9F9F9 | Page background |
| `darkBtn` | #1B1B1B | Primary button |
| `lightBtnText` | #FAF7F6 | Button text |
| `darkSection` | #0C0F0F | CTA section bg |
| `darkFooter` | #030712 | Footer bg |

### Typography
| Font | Tailwind class | Use |
|---|---|---|
| Roboto | `font-roboto` | H1 (84px), H2 (48px, tracking-[-0.05em]) |
| Manrope | `font-manrope` | Bold labels, card titles (22px), buttons |
| Plus Jakarta Sans | `font-jakarta` | Body (16px), descriptions (13px), tags (10px) |
| Inter | `font-inter` | Default body, nav, UI text |

### Spacing & Shape
- Container: `max-w-6xl mx-auto px-4`
- Section padding: `py-10` (Projects) to `py-24`
- Cards: `rounded-[32px] border border-[#E5E7EB] p-5 shadow-sm hover:shadow-md`
- Card inner image area: `rounded-[20px]`
- Buttons: `rounded-full`
- Grids: `grid-cols-1 md:grid-cols-2` (Projects), `md:grid-cols-2 lg:grid-cols-3` (Services)
- Gaps: `gap-6` or `gap-8`

### Interactive Patterns
- Hover: `shadow-sm → shadow-md`, `transition-all duration-300`
- Button hover: `hover:scale-105`, `hover:bg-black`
- Title hover: `group-hover:text-brandGreen`
- Nav active: `emerald-600` underline
- Tag pills: `font-jakarta font-bold text-[10px] uppercase tracking-[0.05em] bg-cardBg px-3 py-1.5 rounded-full`

---

## Projects Section (`src/components/Projects.tsx`)

**Layout:** 2×2 grid (`md:grid-cols-2 gap-6`)

**Card structure:**
1. Visual header (`h-[210px]`, CSS gradient bg) with:
   - Thin accent bar (top, 3px, colored per project, 50% opacity)
   - Category label (top-left, 10px uppercase muted)
   - Key metric (top-right, Manrope Bold 20px)
   - Ghost watermark (project title at 4% opacity, Roboto Extrabold)
   - Domain URL (bottom-left, 11px muted)
   - "Live Site ↗" badge (bottom-right, green, white/80 bg pill)
2. Card body: title (Manrope Bold 22px), description (Jakarta 13px), tag pills

**The 4 projects:**

| # | Title | URL | Category | Metric | Accent |
|---|---|---|---|---|---|
| 1 | Annamalai Kitchen | urban-kitchen-restaurant.vercel.app | Restaurant & Hospitality | 4.8★ Google Rating | #C8813A |
| 2 | VaastuCorp Builders | vaastu-corp-construction.vercel.app | Construction & Real Estate | 150+ Homes Built | #78716C |
| 3 | Stratos Advisory | stratos-consultant.vercel.app | Enterprise Consulting & AI | $4.2M Client Savings | #1E3A5F |
| 4 | Aura Wellness | aura-wellness-gym.vercel.app | Fitness & Wellness | 1,200+ Active Members | #006D47 |

**Project summaries (for copywriting context):**
- **Annamalai Kitchen** — Authentic Chettinad/Tamil restaurant, T. Nagar Chennai. Table reservations, full menu, brand story. Michelin/Times Food/Zomato featured.
- **VaastuCorp Builders** — Premium Chennai home builder. Fixed-price contracts, live cost calculator (3 tiers: ₹1,799–₹2,799/sqft), NRI-friendly remote tracking, 10-yr warranty, 150+ homes.
- **Stratos Advisory** — Enterprise AI, automation & cybersecurity consulting. Dark editorial UI. Services: AI strategy, intelligent process automation, cybersecurity architecture. SOC 2 / NIST CSF / ISO 27001 aligned.
- **Aura Wellness** — Fitness gym, Anna Nagar Chennai. Free 1-day trial funnel, 3 membership tiers (₹999–₹2,499/mo), 90-day money-back guarantee, female trainers section, 1,200+ members.

---

## Services Section (`src/components/Services.tsx`)
6 cards in `lg:grid-cols-3`. Each has an SVG icon from `public/images/`, title, description. Services cover: Responsive Design, Performance, Hosting, SEO, Content, Custom Dev (inferred from icon filenames: responsive.svg, performance.svg, hosting.svg, seo.svg, content.svg, custom.svg).

## Hero (`src/components/Hero.tsx`)
- H1: "I build websites that grow your Business"
- Subtext: "We bridge the gap between technical engineering and high-end editorial aesthetics..."
- CTA: "Book a call" (dark pill button)
- Marquee: `tech1-9.png` grayscale logos (infinite scroll, 30s)
- Floating pain-point tags: "no conversion?", "losing customers?", "no growth?", "no sales?" (red ✕, desktop only)
- Background: two emerald blur gradients (top-left + bottom-right)

## About (`src/components/About.tsx`)
- Owner: Janav Kamesh (freelance web designer/developer)
- "Hi, I'm Janav." heading in brandGreen
- Profile image: `public/images/profile.png`

## TopNavBar (`src/components/TopNavBar.tsx`)
- Logo: "Janav Kamesh."
- Links: Home, Projects, Services, About (scroll-spy, emerald-600 active underline)
- CTA: "Book a Call" pill button
- Hides on scroll-down, reveals on scroll-up

---

## Git
- Repo: github.com/janavkamesh/my-portfolio-website
- Main branch: `main`
- Last commit: "add 4 real project cards to Projects section"
