---
name: Urban Kinetic Minimal
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#5a4138'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#8e7166'
  outline-variant: '#e2bfb2'
  surface-tint: '#a73a00'
  primary: '#a33900'
  on-primary: '#ffffff'
  primary-container: '#cc4900'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb599'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006b2c'
  on-tertiary: '#ffffff'
  tertiary-container: '#00873a'
  on-tertiary-container: '#f7fff2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbce'
  primary-fixed-dim: '#ffb599'
  on-primary-fixed: '#370e00'
  on-primary-fixed-variant: '#7f2b00'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#7ffc97'
  tertiary-fixed-dim: '#62df7d'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005320'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes a high-performance, street-authentic yet meticulously clean digital marketplace. It targets both novice skaters seeking technical mentorship and seasoned, professional coaches managing private bookings. 

The aesthetic blends **Modern Minimalist Utility** with **Kinetic Street Culture**:
- Architectural whitespace and crisp borders replace skate-punk chaos, delivering trust, safety, and straightforward booking conversion.
- Energy and punch are injected through high-octane energetic citrus accents, tactile tag indicators (street, bowl, grind, park), and athletic, direct typographic hierarchy.
- The interface feels responsive, authentic, frictionless, and purpose-built for fast direct WhatsApp scheduling on mobile devices right at the skatepark.

## Colors

The palette leverages contrast between deep charcoal foundations and high-visibility skate orange to balance street credibility with institutional trust:

- **Primary (`#ea580c` / `#f97316`)**: Skate Flame. Reserved strictly for key conversion drivers, primary call-to-actions, booking highlights, and active discipline badges.
- **Secondary (`#0f172a` / `#1e293b`)**: Asphalt Neutral. Provides ink-heavy legibility, solid headers, coach credential accents, and structural dark components.
- **Tertiary (`#16a34a`)**: Session Signal / WhatsApp Green. Purposefully integrated to anchor direct-contact actions and real-time coach availability indicators.
- **Surface & Background (`#ffffff`, `#f8fafc`, `#f1f5f9`)**: Clean, concrete-inspired surfaces ensuring optimal readability in outdoor, high-glare environments.
- **Subtle Stroke (`#e2e8f0`)**: Delivers razor-sharp, low-contrast separation across cards and lists without visual clutter.

## Typography

The typographic hierarchy pairs **Space Grotesk** for architectural, street-rooted headline discipline with **DM Sans** for neutral, ultra-readable body content.

- **Headlines & Badges**: Set in Space Grotesk. Tight tracking and technical geometry convey authority and modern action sports engineering.
- **Body & Data Content**: Set in DM Sans. Neutral, humanist, low-contrast, and optimized for rapid scanning of coach bios, pricing tiers, and session guidelines.
- **Discipline Labels**: Always uppercase in `label-sm` with slight tracking expansions to maintain immediate visual classification across mobile cards.

## Layout & Spacing

A strict fluid 12-column grid anchors the desktop layout with a maximum container width of `1200px` (`max-w-6xl` in Tailwind CSS). Mobile viewports transition to a dynamic single-column flow with persistent horizontal margins of `16px` (`px-4`).

- **Grid Columns**: 12 columns desktop, 6 columns tablet (`md:` breakpoint at `768px`), 1 or 2 columns mobile (`sm:` breakpoint at `640px`).
- **Vertical Flow**: Sections leverage generous rhythmic breathing room (`space-xl` / `64px-80px` outer margins) to prevent dense SaaS fatigue.
- **Card Internals**: Strict `space-md` (16px) or `space-lg` (24px) padding ensures clean separation between profile headers, tag groups, and conversion actions.

## Elevation & Depth

Visual hierarchy is maintained via **clean surface-tiering and low-contrast borders** rather than excessive drop shadows:

- **Level 0 (Canvas)**: Background surface in pure `#ffffff` or cool `#f8fafc`.
- **Level 1 (Card & Content Blocks)**: White surface (`#ffffff`) bounded by a 1px border of `#e2e8f0`, accompanied by an ambient subtle shadow: `0 1px 3px 0 rgb(15 23 42 / 0.05)`.
- **Level 2 (Interactive Hover / Modals)**: Subtle lift on hover: `translate-y-[-2px]` combined with `0 10px 15px -3px rgb(15 23 42 / 0.08)`.
- **Level 3 (Action Sticky Bar / Mobile Footer)**: Backdropped with `backdrop-blur-md bg-white/90` and a crisp top border (`border-t border-slate-200/80`).

## Shapes

The design system implements a **Rounded (`roundedness: 2`)** paradigm:
- Base components (buttons, input fields, interactive chips) feature an 8px (`rounded-lg` / `0.5rem`) corner radius.
- Cards, modal shells, and segmented containers use 16px (`rounded-2xl` / `1rem`).
- Modality tags and discipline pills use an intentionally continuous semi-pill structure (`rounded-md` to `rounded-full`) to differentiate descriptive metadata from clickable rectangular triggers.

## Components

### Buttons
- **Primary Action (Book / Filter)**: Background `#ea580c`, text white, `font-medium`, `rounded-lg`, smooth transition to `#c2410c` on hover. Focus outline: `ring-2 ring-orange-500/40`.
- **WhatsApp Direct Action**: Dedicated utility class featuring emerald fill (`#16a34a`), white bold text, integrated WhatsApp SVG icon, and hover state `#15803d`. Explicitly includes pre-populated booking text triggers.
- **Secondary / Ghost**: White or transparent background, 1px border `#cbd5e1`, text `#0f172a`, hover background `#f1f5f9`.

### Chips & Modality Tags
- **Discipline Chips (Street, Bowl, Grind, Park)**:
  - *Active / Selected*: Background `#ffedd5`, border `1px solid #fdba74`, text `#c2410c`.
  - *Neutral / Filter*: Background `#f1f5f9`, text `#475569`, border `1px solid #e2e8f0`.
- **Level Badges (Beginner, Intermediate, Pro)**: Compact upper-case pill format (`text-xs font-semibold px-2 py-0.5 rounded-full`) in monochrome slate tokens.

### Mentor Cards
- Structure:
  1. Header: Avatar image (with verified pro check badge) alongside coach name, hourly rate, and location.
  2. Tag Strip: Horizontal cluster of discipline chips (Street, Bowl, etc.).
  3. Bio / Highlights: 2-line clamped summary in `body-sm` (`#64748b`).
  4. Footer Action: Full-width or prioritized dual CTA containing "Ver Perfil" and high-emphasis "Reservar vía WhatsApp".

### Input Fields & Search
- Bordered in `border-slate-300`, background `bg-white`, `rounded-lg`, padding `py-2.5 px-3.5`, focus border `border-orange-500`, focus ring `ring-2 ring-orange-500/20`. Search bars include integrated spot icons (pin, discipline dropdown, date picker).

### Checkboxes & Segmented Controls
- Custom controls matching the primary brand orange `#ea580c` for active selection, set against neutral borders.