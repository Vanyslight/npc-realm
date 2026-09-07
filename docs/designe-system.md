---
name: NPCRealm
colors:
  surface: "#1a1203"
  surface-dim: "#1a1203"
  surface-bright: "#423824"
  surface-container-lowest: "#140d01"
  surface-container-low: "#231a08"
  surface-container: "#271e0c"
  surface-container-high: "#322916"
  surface-container-highest: "#3d341f"
  on-surface: "#f1e0c3"
  on-surface-variant: "#dfbfbc"
  inverse-surface: "#f1e0c3"
  inverse-on-surface: "#392f1b"
  outline: "#a78a87"
  outline-variant: "#58413f"
  surface-tint: "#ffb3ac"
  primary: "#ffb3ac"
  on-primary: "#680008"
  primary-container: "#8a1c1c"
  on-primary-container: "#ff9a92"
  inverse-primary: "#aa3430"
  secondary: "#e8c086"
  on-secondary: "#432c00"
  secondary-container: "#5d4213"
  on-secondary-container: "#d5af76"
  tertiary: "#c8c6c8"
  on-tertiary: "#303032"
  tertiary-container: "#484749"
  on-tertiary-container: "#b7b5b8"
  error: "#ffb4ab"
  on-error: "#690005"
  error-container: "#93000a"
  on-error-container: "#ffdad6"
  primary-fixed: "#ffdad6"
  primary-fixed-dim: "#ffb3ac"
  on-primary-fixed: "#410003"
  on-primary-fixed-variant: "#891b1c"
  secondary-fixed: "#ffdeae"
  secondary-fixed-dim: "#e8c086"
  on-secondary-fixed: "#281800"
  on-secondary-fixed-variant: "#5d4213"
  tertiary-fixed: "#e4e2e4"
  tertiary-fixed-dim: "#c8c6c8"
  on-tertiary-fixed: "#1b1b1d"
  on-tertiary-fixed-variant: "#474649"
  background: "#1a1203"
  on-background: "#f1e0c3"
  surface-variant: "#3d341f"
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: "700"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.2"
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: "600"
    lineHeight: "1.2"
  headline-md:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.3"
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.5"
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: "600"
    lineHeight: "1"
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 3rem
---

## Brand & Style

The design system is rooted in a **Grimdark Medieval** aesthetic, designed to evoke a sense of weight, history, and somber intensity. It targets a tabletop gaming and fantasy-world-building audience that values immersion and "in-universe" utility.

The style is a hybrid of **Tactile/Skeuomorphic** and **Minimalist** structures. It utilizes heavy textures, weathered metallic accents, and deep tonal layers to create a UI that feels forged rather than coded. Every element should feel like a physical object—a heavy gate, a blood-stained ledger, or a rusted blade—while maintaining the functional clarity required for a modern SaaS application.

## Colors

The palette is intentionally restricted to enhance the oppressive, atmospheric mood of the environment.

- **Background & Surface:** The foundation is built on _Dark Stone_ (#161618), a deep, near-black neutral. Secondary surfaces and card containers use _Gunmetal_ (#242528) to provide subtle depth without breaking the dark immersion.
- **Typography:** _Aged Parchment_ (#D4C4A8) serves as the primary text color, providing high readability against dark backgrounds while softening the clinical harshness of pure white.
- **Accents & Interactions:** _Deep Blood Red_ (#8A1C1C) is reserved for high-priority actions and critical states. _Worn Brass_ (#B08D57) is used for decorative borders, iconography, and fine details, suggesting aged craftsmanship.

## Typography

The typography strategy pairings high-contrast editorial serifs with sharp, modern grotesques to balance medieval flair with digital legibility.

- **Headlines:** Use **EB Garamond**. It provides the authoritative, historical weight necessary for a dark fantasy setting. Headlines should use "Small Caps" or "Oldstyle Figures" where appropriate to reinforce the period feel.
- **Body & Interface:** Use **Hanken Grotesk**. This contemporary sans-serif ensures that dense information, such as character stats or item descriptions, remains perfectly legible even at smaller sizes on mobile devices.
- **Labels:** Small labels and metadata should use uppercase Hanken Grotesk with increased letter-spacing to mimic the look of engraved or stamped metal.

## Layout & Spacing

Following a **Mobile-First Bootstrap 5** implementation, the layout utilizes a fluid 12-column grid system.

- **Breakpoints:** Standard Bootstrap tiers (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px).
- **Rhythm:** A strict 8px baseline grid maintains vertical rhythm. Containers should feature generous padding (24px+) to prevent the dark background from feeling claustrophobic.
- **Reflow:** On mobile, sidebars collapse into a "bottom drawer" or a full-screen "parchment overlay" to maximize space for primary storytelling content.

## Elevation & Depth

In this design system, depth is communicated through **Tonal Layers** and **Tactile Borders** rather than standard soft shadows.

- **Hierarchy:** Elements closer to the user (like Modals) are slightly lighter in value (#2D2E32) and feature a thin, 1px _Worn Brass_ border.
- **Backdrop:** Use a high-density "Noise" texture (3-5% opacity) over the entire UI to simulate the grit of stone and iron.
- **Shadows:** Use hard, low-blur shadows (e.g., `4px 4px 0px rgba(0,0,0,0.5)`) to create a "carved" look, reinforcing the brutalist, heavy nature of the UI.

## Shapes

Shapes are generally **sharp and geometric** to reflect the harshness of the world. A "Soft" roundedness (0.25rem) is applied only to prevent the UI from feeling physically painful to look at, suggesting "worn edges" rather than modern softness.

Interactive elements like buttons should use 0px radius on one corner (top-left or bottom-right) to create an asymmetrical, hand-forged silhouette.

## Components

- **Buttons:** Primary buttons are _Deep Blood Red_ with a 2px _Worn Brass_ bottom border. Hover states should darken the red and add a subtle inner glow. Text is centered and bold.
- **Cards:** Cards use the _Gunmetal_ surface. They must feature a subtle "etched" top border in _Worn Brass_ (0.5px thickness).
- **Input Fields:** Fields are recessed into the UI using an inner-shadow. The background is a slightly darker shade of _Dark Stone_. The focus state replaces the border with a _Deep Blood Red_ stroke.
- **Chips/Badges:** Small, rectangular tags with no roundedness. Use _Worn Brass_ backgrounds with black text for "Legendary" items, and _Dark Stone_ with _Aged Parchment_ text for common metadata.
- **Lists:** Use "Divider Lines" that look like etched scratches or horizontal rules with a slight metallic gradient.
- **Progress Bars:** Represented as "Vials" or "Forged Bars" using _Deep Blood Red_ for health/progress and a hollow _Worn Brass_ frame.

logo
web application/stitch/projects/13739996813063846293/screens/5911ef6e2f4a4b488d07eb750c411c01
