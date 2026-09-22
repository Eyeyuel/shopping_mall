# Master Implementation Plan: Mall Directory Application

This document provides a comprehensive, start-to-finish technical blueprint for the Mall Directory application. It strictly enforces the "Frame -> System -> Compose -> Motion" UI philosophy and the "Modern Elegance" design aesthetic.

---

## PHASE 1: Foundation & Tooling (The Base)
*Goal: Initialize a clean, high-performance environment.*

### 1.1 Next.js App Router Initialization
We will scaffold the project using the following exact configuration:
```bash
npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm -y
```
- **Why**: Next.js App Router provides the best performance for mobile web apps, which is critical for a QR-code triggered experience.

### 1.2 Core Libraries Installation
We will install the specialized libraries required for our architecture:
```bash
npm install framer-motion next-themes next-intl lucide-react clsx tailwind-merge
```
- `framer-motion`: For physics-based UI micro-interactions.
- `next-themes`: For instant, flash-free dark/light mode switching.
- `next-intl`: For localized routing and translations.
- `lucide-react`: For premium, lightweight SVG iconography.

### 1.3 UI Component Library (shadcn/ui)
We will initialize the unstyled Radix primitives and add specific components needed for the app.
```bash
npx shadcn-ui@latest init -y
npx shadcn-ui@latest add button card input scroll-area dialog badge tabs sheet -y
```

---

## PHASE 2: Visual System Architecture (The "System")
*Goal: Lock in the "Modern Elegance" visual tokens before writing any UI logic. No random colors or generic AI templates are allowed.*

### 2.1 CSS Tokens (`src/app/globals.css`)
We will define strict HSL variables for our palette.

**Light Mode (Crisp Pearl Base)**
- `--background: 0 0% 98%` (Crisp Pearl)
- `--foreground: 0 0% 10%` (Deep Obsidian Text)
- `--primary: 43 74% 39%` (Deep Gold Accent)
- `--muted: 0 0% 90%` (Soft borders)

**Dark Mode (Deep Obsidian Base)**
- `--background: 0 0% 5%` (Deep Obsidian)
- `--foreground: 0 0% 95%` (Crisp Pearl Text)
- `--primary: 43 74% 49%` (Champagne Gold Accent)
- `--secondary: 188 86% 53%` (Electric Cyan for interactive states)
- `--muted: 0 0% 15%`

### 2.2 Tailwind Configuration (`tailwind.config.ts`)
Map the CSS variables to Tailwind and add glassmorphism utilities.
- Extend `colors` to use the CSS variables.
- Add custom utilities for `.glass-panel` (e.g., `backdrop-blur-md bg-white/10 border border-white/20`).

### 2.3 Theming Setup (`src/components/ThemeProvider.tsx`)
Create a provider to wrap the application, forcing system-default theme detection with manual overrides.

### 2.4 i18n Localization Engine
- Setup `src/i18n.ts`.
- Create dictionary files: `messages/en.json` (English) and additional languages as needed.

---

## PHASE 3: Data Layer & State (The "Data")
*Goal: Create robust placeholder data since there is no backend.*

### 3.1 Mock Data Schema (`src/types/index.ts`)
```typescript
export interface Shop {
  id: string;
  name: string;
  category: 'Fashion' | 'Electronics' | 'Dining' | 'Services' | 'Entertainment';
  logoUrl: string;
  heroImageUrl: string;
  videoUrl: string; // Used for the signature detailed view
  description: string;
  floor: string;
  hours: string;
  tags: string[];
}
```

### 3.2 Mock Data Population (`src/data/mockShops.ts`)
Populate the schema with 10-15 high-quality entries with realistic mall data, utilizing high-resolution placeholder imagery.

---

## PHASE 4: Component Engineering (The "Frame")
*Goal: Build the reusable building blocks of the application.*

### 4.1 Animation Primitives (`src/components/animations/`)
- `FadeIn.tsx`: Standard opacity fade for text/images.
- `StaggerGrid.tsx`: A parent container that orchestrates a cascading entrance animation for child elements.
- `PageTransition.tsx`: Wraps Next.js route changes in a smooth cross-fade.

### 4.2 Composite Components
- **`Header.tsx`**: A sticky, glassmorphic top navigation containing the Mall Logo, Theme Toggle, and Language Switcher.
- **`ShopCard.tsx`**: A clickable card representing a shop. Uses framer-motion `whileHover` for a subtle lift effect. Displays logo, name, and floor.
- **`CategoryTabs.tsx`**: A horizontal, touch-friendly scroll area filtering the mock data by category.

---

## PHASE 5: Page Composition (The "Compose")
*Goal: Assemble the components into beautiful, responsive pages utilizing intentional asymmetry and whitespace.*

### 5.1 Global Layout (`src/app/layout.tsx`)
- Integrate `ThemeProvider` and `NextIntlClientProvider`.
- Set the global font (e.g., Inter or Outfit) to ensure a modern typography hierarchy.
- Include the `Header`.

### 5.2 Directory Home Page (`src/app/page.tsx`)
- **Hero Area**: A sleek, full-width `Input` field acting as a live search bar.
- **Filter Area**: The `CategoryTabs` component.
- **Content Area**: The `StaggerGrid` containing `ShopCard`s. As the user types in the search bar, the grid smoothly animates the filtering of cards.

### 5.3 Signature Shop Details Page (`src/app/shop/[id]/page.tsx`)
- **Signature Element**: An edge-to-edge, cinematic hero section. If `videoUrl` exists, it silently auto-plays a looping background video. Overlaid with a dark gradient to ensure text readability.
- **Content Body**: 
  - Large, elegant typography for the shop name.
  - Badges for tags/categories.
  - Structured grid for Floor, Hours, and Description.
  - A prominent, Champagne Gold CTA button (e.g., "Get Directions").

---

## PHASE 6: Motion Polish & Validation (The "Motion")
*Goal: Quality Gate check to ensure production-readiness.*

### 6.1 Anti-Pattern Validation
- Ensure no generic purple gradients or "blob" SVGs are present.
- Ensure all margins/paddings use Tailwind's strict spacing scale (no random `margin-top: 17px`).

### 6.2 Accessibility & Performance
- Verify all `framer-motion` animations respect the `(prefers-reduced-motion: reduce)` media query.
- Test touch-targets on mobile viewports (buttons must be at least 44x44px).
- Run `npm run build` to verify zero TypeScript or ESLint errors.
