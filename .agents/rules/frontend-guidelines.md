# Frontend Design & Agent Behavior Guidelines

These rules are strictly enforced for all AI agents working on this project. They are designed to guarantee a distinctive, production-grade interface and avoid generic "AI-looking" UIs.

## 1. The Core Workflow: Frame -> System -> Compose -> Motion

All UI development MUST follow this four-step process:

### A. Frame (Direction & Restraint)
- **One Visual Direction**: Commit strictly to the "Modern Elegance" aesthetic (Deep Obsidian for dark mode, Crisp Pearl for light mode, with Champagne Gold and Electric Cyan accents).
- **Signature Element**: Define one memorable signature element or interaction per view (e.g., a specific glassmorphic hero section, a unique typography treatment) before writing code.
- **Spend Boldness in One Place**: Practice restraint. Do not overwhelm the user with too many complex visuals at once.

### B. System (Tokens & Consistency)
- **Visual System First**: Establish design tokens (color variables, type hierarchy, spacing rhythm, surface treatments) in `src/app/globals.css` and `tailwind.config.ts` *before* building components.
- **Never create random custom colors**. You MUST use the defined Tailwind variables.
- **Use Shadcn/UI**: Prioritize composing existing `shadcn/ui` components. Abstract any new raw HTML/Tailwind into reusable components in `src/components/`.

### C. Compose (Layout & Density)
- **Intentional Composition**: Use intentional asymmetry, overlapping elements where appropriate, deliberate whitespace, and clear density decisions.
- **Two-Pass Process**: Plan the layout, critique it against the brief and these rules, and *only then* execute the build.

### D. Motion (Meaningful Animation)
- **Meaningful Motion**: Use `framer-motion` for smooth, physics-based micro-interactions and page transitions. Motion must have rules (e.g., staggered lists, spring-based reveals).
- **Accessibility**: Always respect `prefers-reduced-motion` and ensure animations degrade gracefully on mobile devices.

## 2. Anti-Patterns (DO NOT USE)
- Generic "AI-looking" UIs (e.g., standard purple/blue gradients, decorative floating blobs, generic hero copy).
- Unplanned, inconsistent margin/padding scales (always use Tailwind's spacing system).
- Flash of unstyled content or jarring theme switches.

## 3. Tool Usage & Best Practices
- **Always Run Commands**: When installing a package or adding a shadcn component (e.g., `npx shadcn-ui@latest add button`), execute the terminal command yourself using your tools. Do not ask the user to run it.
- **Code Quality**: Adhere to modern Next.js App Router best practices, strictly typed TypeScript, and a clean, modular component architecture.
