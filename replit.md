# AusSuperSource SMSF Landing Page

## Overview

AusSuperSource is a professional SMSF (Self-Managed Super Fund) service provider website targeting Australian accountants, financial advisors, and SMSF trustees. The platform offers comprehensive SMSF auditing, outsourcing, and compliance solutions with a focus on trust, transparency, and fast turnaround times.

The website features a modern, stats-driven landing page design inspired by Tax NextGen, Stake Super, Linear, and Stripe, emphasizing credibility through metrics, smooth animations, and clear value propositions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **Tailwind CSS** for utility-first styling with custom design system
- **Shadcn/ui** component library (New York style) built on Radix UI primitives
- **Framer Motion** for smooth, sophisticated animations

**Design System:**
- Typography: Inter font family via Google Fonts CDN
- Color scheme: Neutral base with HSL-based theming supporting light/dark modes
- Spacing: Tailwind's 4px-based scale (4, 6, 8, 12, 16, 20, 24, 32)
- Component variants managed via `class-variance-authority`
- Custom CSS variables for theming (`--background`, `--foreground`, `--primary`, etc.)

**Component Structure:**
- **Page-level components** (`/pages`): Home, About, Services, Team, Accountants, Trustees, Contact, Login, Privacy
- **Section components** (`/components`): Hero, StatsSection, ServicesSection, TeamSection, ContactSection, CTASection, ValueProposition, HowItWorks, Testimonials, PartnersSection, Navbar, Footer, FloatingContactButton
- **UI primitives** (`/components/ui`): Shadcn components (Button, Card, Form, Input, Dialog, etc.)

**Recent Changes (October 28, 2025):**
- Enhanced About, Services, and Team pages with colored hero sections and visual backgrounds
- Updated Contact section to display 3 locations: Sydney (Head Office), Victoria (Melbourne), and Adelaide (SA)
- Changed contact form field from "State" to "Your Location" for better clarity
- Implemented floating contact button with smooth animations and multiple close options
  - Positioned at bottom-right with popup card sliding from the right
  - Provides quick access to contact options (message, call, email)
  - Z-index layering ensures button remains clickable when popup is open

**Routing:**
- Routes: `/` (home), `/about`, `/services`, `/team`, `/accountants`, `/trustees`, `/contact`, `/login`, `/privacy`
- Client-side navigation with scroll-to-section functionality on home page

**State Management:**
- React Hook Form with Zod validation for forms
- TanStack Query (React Query) configured but not actively used (preference for central fetch API noted)
- Local component state via React hooks

### Backend Architecture

**Server Stack:**
- **Express.js** server with TypeScript
- **Node.js** runtime
- Middleware: JSON parsing, URL encoding, CORS handling
- Development: `tsx` for TypeScript execution
- Production: esbuild for bundling

**API Design:**
- RESTful API structure (prefix: `/api`)
- Currently minimal server routes defined in `server/routes.ts`
- Request/response logging middleware
- Error handling with appropriate HTTP status codes

**Storage Layer:**
- Interface-based storage abstraction (`IStorage`)
- In-memory implementation (`MemStorage`) for development
- Designed for easy swap to persistent storage (PostgreSQL with Drizzle ORM)
- User schema defined but not yet actively used

### Data Storage Solutions

**ORM & Database:**
- **Drizzle ORM** configured for PostgreSQL
- Schema location: `shared/schema.ts`
- Migration output: `./migrations`
- Connection via `DATABASE_URL` environment variable
- Neon serverless driver for PostgreSQL connectivity

**Current Schema:**
- `users` table with `id` (UUID), `username`, `password`
- Zod validation schemas via `drizzle-zod`
- Type inference for insert/select operations

**Migration Strategy:**
- Drizzle Kit for schema management
- Push-based migrations (`npm run db:push`)

### Authentication and Authorization

**Current Implementation:**
- User schema defined with username/password fields
- No active authentication implemented yet
- Login page redirects to external BGL Portal (`bglportal.com.au/login`)
- Password reset handled externally

**Planned Architecture:**
- Express sessions with `connect-pg-simple` for PostgreSQL session store
- Credential-based authentication
- Secure password hashing (bcrypt/argon2 recommended)

### External Dependencies

**Third-party Services:**
- **BGL Portal**: External client login system for SMSF management
  - Login: `https://bglportal.com.au/login`
  - Password reset: `https://bglportal.com.au/login/resetpassword.html?firm=aussupersource`

**APIs & Integrations:**
- Google Fonts CDN for Inter typography
- Placeholder services for partner logos and avatars
- Unsplash for hero imagery

**Development Tools:**
- Replit-specific plugins: runtime error overlay, cartographer, dev banner
- PostCSS with Tailwind and Autoprefixer
- ESLint/TypeScript for code quality

**Agent Integration:**
- Custom agent bridge contract (`/public/agent-bridge.js`)
- Well-known endpoint (`/.well-known/agent.json`)
- Agent manifests for programmatic page interaction
- Data hooks (`data-route`, `data-kpi`, `data-action`, `data-field`) throughout UI
- Capabilities catalog for agent discovery

**UI Component Libraries:**
- Radix UI primitives (20+ components: Accordion, Dialog, Dropdown, Select, Tabs, Toast, etc.)
- Lucide React for icons
- Embla Carousel for testimonials/content carousels
- CMDK for command palette functionality (if needed)

**Styling & Animation:**
- Tailwind CSS v3+ with JIT compiler
- Framer Motion for declarative animations
- Custom scrollbar hiding for clean aesthetics
- CSS variables for runtime theming

**Form Handling:**
- React Hook Form for form state management
- @hookform/resolvers for Zod schema validation
- Date-fns for date manipulation (if needed in forms)

**Build & Deployment:**
- Vite for fast HMR and optimized production builds
- esbuild for server bundling
- Output: `dist/public` (client), `dist` (server)
- Environment: Development vs. Production mode switching