# Rumah Sunat Modern Jati

Production-ready company profile website foundation for **Rumah Sunat Modern Jati**.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- pnpm
- Vercel-ready

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `pnpm dev`       | Start development server |
| `pnpm build`     | Production build         |
| `pnpm start`     | Start production server  |
| `pnpm lint`      | Run ESLint               |
| `pnpm format`    | Format with Prettier     |
| `pnpm typecheck` | TypeScript check         |

## Project Structure

```
app/                 # App Router routes & layout
components/
  ui/                # Design system primitives
  layout/            # Section, Grid, Flex, Stack
  animations/        # Framer Motion presets
  sections/          # Page sections (next phases)
  shared/            # Shared composites (next phases)
hooks/               # Custom React hooks
lib/                 # Utilities, fonts, helpers
types/               # Shared TypeScript types
constants/           # Site + design constants
assets/              # Static assets imported via code
styles/              # Global CSS & design tokens
public/              # Public static files
```

## Design System

Reusable primitives live under `components/ui`, layout helpers under `components/layout`, and motion presets under `components/animations`.

```tsx
import { Button, Card, SectionTitle } from "@/components/ui";
import { Section, Grid, Stack } from "@/components/layout";
import { FadeUp, StaggerContainer } from "@/components/animations";
```

## Path Aliases

- `@/components`
- `@/app`
- `@/lib`
- `@/hooks`
- `@/types`
- `@/constants`
- `@/assets`
- `@/styles`
- `@/public`

## Notes

This repository currently contains the **project foundation only**. Pages and UI sections will be added in later phases.

# home-medice
