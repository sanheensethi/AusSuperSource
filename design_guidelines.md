# AusSuperSource SMSF Landing Page - Design Guidelines

## Design Approach

**Reference-Based Design** drawing inspiration from:
- **Tax NextGen**: Modern, stats-driven, smooth animations, generous whitespace, professional yet approachable
- **Stake Super**: Clean fintech aesthetic, bold typography, award badges, trust signals
- **Linear**: Clean typography hierarchy and component structure
- **Stripe**: Restrained elegance and professional credibility

### Design Principles
1. **Trust Through Clarity**: Professional, transparent, and compliant visual language
2. **Stats Over Text**: Lead with numbers, metrics, and visual proof points
3. **Smooth Sophistication**: Subtle animations that enhance, never distract
4. **Dual Audience Appeal**: Design serves both accountants (professional) and trustees (accessible)

---

## Typography

**Font Selection**: Inter (primary) via Google Fonts CDN

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- Section Headings: text-3xl md:text-4xl lg:text-5xl, font-bold
- Subsection Headings: text-2xl md:text-3xl, font-semibold
- Body Large: text-lg md:text-xl, font-normal
- Body: text-base, font-normal
- Small/Meta: text-sm, font-medium

**Hierarchy Strategy**:
- Large, confident headlines establishing authority
- Generous line-height (leading-relaxed) for readability
- Consistent weight progression (normal → medium → semibold → bold)

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Micro spacing (component internals): 4, 6
- Standard gaps/padding: 8, 12, 16
- Section spacing: 20, 24, 32
- Major section breaks: py-20 md:py-24 lg:py-32

**Container Strategy**:
- Max-width: max-w-7xl (full sections), max-w-6xl (content-focused), max-w-prose (text blocks)
- Horizontal padding: px-4 md:px-6 lg:px-8
- Centered: mx-auto

**Grid System**:
- Stats Section: grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12
- Services: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Team: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
- Testimonials: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

---

## Component Library

### Navigation
- Fixed header with subtle backdrop blur (backdrop-blur-md)
- Logo left, navigation center/right, CTA button prominent
- Mobile: Hamburger menu with slide-in drawer
- Height: h-16 md:h-20

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Large background image with gradient overlay
- Headline + subheadline + dual CTA buttons (primary + secondary)
- Award badges/trust signals below CTAs
- Buttons with backdrop-blur-md bg-white/10 or bg-black/20 treatment

### Stats Counter Section
- 4-column grid on desktop, 2-column on mobile
- Animated count-up on scroll into view
- Large number display (text-4xl md:text-5xl font-bold)
- Descriptive label below (text-sm md:text-base)
- Subtle icon above each stat

### Services Section
- Card-based layout with hover lift effect (hover:shadow-xl transition-all)
- Icon + Title + Description + Expandable details
- Clean borders (border rounded-xl)
- Comfortable padding (p-6 md:p-8)

### Testimonials/Reviews
- Card grid with customer photo, quote, name, rating
- Product Review logo integration
- Star ratings display
- Subtle background treatment

### Team Section
- Profile cards with headshot, name, title
- Circular images (rounded-full)
- Clean, minimal presentation

### Contact Form
- Two-column layout on desktop (form left, info right)
- Shadcn form components with proper validation
- Dropdown for service interest
- Clear field labels and helpful placeholders

### CTA Sections
- Full-width sections between major content blocks
- Centered headline + supporting text + button
- Contrasting background treatment

### Footer
- Multi-column layout with company info, quick links, contact details
- Partner/accreditation logos
- Social links
- Copyright and legal links

---

## Images

### Hero Image
Large, professional background image showing:
- Modern office environment, financial professionals collaborating, or abstract financial graphics
- Treatment: Gradient overlay (from-black/60 to-black/30) for text legibility
- Positioning: object-cover object-center
- Quality: High-resolution, professionally shot

### Service Icons/Illustrations
- Clean, professional iconography throughout
- Heroicons or Lucide React icon library
- Size: w-12 h-12 md:w-16 md:h-16 for section icons

### Team Headshots
- Professional portrait photos
- Placeholder: https://i.pravatar.cc/ for mockup
- Circular crop with subtle border

### Partner Logos
- Placeholder via shields.io or similar for: CPA Australia, CA ANZ, SMSF Association, ATO
- Grayscale treatment with hover color effect

### Section Break Images (Optional Use)
- Financial charts, dashboard screenshots, or abstract professional imagery
- Used sparingly to break up long content sections
- Always with complementary text overlay treatment

---

## Animations

**Scroll Animations** (Framer Motion):
- Fade-in on scroll for sections (opacity: 0 → 1, y: 20 → 0)
- Stagger children for card grids (staggerChildren: 0.1)
- Stats counter animation on viewport entry

**Interaction States**:
- Card hover: transform scale-[1.02] + shadow elevation
- Button hover: Shadcn default states
- Link hover: underline decoration with offset

**Performance Guidelines**:
- Use transform and opacity for animations
- Prefers-reduced-motion support
- Lazy load animations below fold

---

## Key Sections Structure

1. **Hero**: Full-screen with background image, headline, CTAs, award badges
2. **Stats Bar**: 4 key metrics with animated counters
3. **Value Proposition**: Why choose AusSuperSource - 6 benefit cards in grid
4. **Services Overview**: 3 main services with expandable details
5. **Process/How It Works**: Step-by-step visual guide
6. **Team**: 4 team member profiles
7. **Partners/Accreditations**: Logo grid
8. **Testimonials**: Customer reviews in card grid
9. **Final CTA**: Prominent call-to-action section
10. **Contact Form**: Full-width section with form + context
11. **Footer**: Comprehensive footer with links and info

---

## Responsive Behavior

- Mobile-first approach with progressive enhancement
- Hero text scales down gracefully on mobile
- Grid layouts collapse to single column on mobile
- Touch-friendly tap targets (min 44px)
- Horizontal scroll prevention
- Optimized image loading per viewport