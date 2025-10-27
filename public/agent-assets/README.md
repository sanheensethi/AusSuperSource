# Agent Contract Documentation

This directory contains the agent-driven interaction contracts for the Australian Super Source website.

## Overview

The website is annotated with stable data hooks that enable programmatic agent interactions. This follows a standard contract-based approach where:

1. **HTML Elements** are tagged with data attributes (data-route, data-kpi, data-action, etc.)
2. **Manifest Files** define the structure and capabilities of each page
3. **Bridge API** provides JavaScript methods for agent interaction
4. **Capabilities Pack** catalogs all available features

## Data Hook Attributes

### Required Hooks (Rule of 6)

1. **Page Root**: `data-route="<routeId>"` and `data-contract-version="X.Y.Z"`
2. **Actions** (clickables): `data-action="<namespace.action>"`
3. **KPIs/Values**: `data-kpi="<kebab-kpi-id>"`
4. **Form Fields**: `data-field="<form.fieldId>"`
5. **Entities/Rows**: `data-entity-type="<type>"` + `data-entity-id="<id>"`
6. **Async Readiness**: `data-ready="<region>"` or `data-loading="<region>"`

### Recommended Hooks

- **Lists/Tables**: Container `data-list="<name>"`; cells `data-col="<field>"`
- **Navigation**: `data-nav-item="<routeId>"`
- **Dialogs**: `role="dialog"` + `data-dialog="<id>"`
- **Toasts**: `role="status"` + `data-toast="<id>"`
- **Empty/Error States**: `data-empty="<scope>"`, `data-error="<CODE>"`

## Naming Conventions

- **DOM hooks**: kebab-case (e.g., `data-kpi="years-experience"`)
- **Action IDs**: dot.namespace (e.g., `contact.submit`, `login.submit`)
- **Manifest KPI IDs**: snake_case (e.g., `years_experience`)
- **DOM-to-Manifest**: `years_experience` (manifest) ↔ `years-experience` (DOM)

## Routes & Manifests

### Available Routes

| Route ID | Path | Manifest | Description |
|----------|------|----------|-------------|
| `home` | `/` | ✅ | Landing page with stats, services, team, contact form |
| `about` | `/about` | ❌ | About the company |
| `services` | `/services` | ✅ | SMSF services list |
| `team` | `/team` | ✅ | Team members list |
| `accountants` | `/accountants` | ❌ | Process for accountants & advisors |
| `trustees` | `/trustees` | ❌ | Process for trustee clients |
| `contact` | `/contact` | ✅ | Contact form |
| `login` | `/login` | ✅ | Client portal login |
| `privacy` | `/privacy` | ❌ | Privacy statement |

### Key Performance Indicators (KPIs)

**Home Page Stats** (`data-kpi`):
- `asic-registered`: ASIC registration percentage (100%)
- `years-experience`: Company years of experience (8+)
- `smsf-administered`: Number of SMSFs administered (300+)
- `director-experience`: Director's years of experience (25+)

### Actions

**Contact Form** (`data-action="contact.submit"`):
- Submits contact form
- Required fields: name, email, state, subject, message
- Optional: phone
- Errors: VALIDATION, NETWORK, EXCEPTION

**Login** (`data-action="login.submit"`):
- Submits login credentials
- Required fields: username, password
- Errors: VALIDATION, UNAUTH, NETWORK, EXCEPTION

### Lists

**Services** (`data-list="services"`):
- Entities: `data-entity-type="service"`, `data-entity-id="service-{index}"`
- Columns: `title`, `description`
- Count: 7 services

**Team Members** (`data-list="team-members"`):
- Entities: `data-entity-type="team-member"`, `data-entity-id="{index}"`
- Columns: `name`, `role`, `bio`, `email`
- Count: 2 members

### Forms

**Contact Form** (`form` with fields):
- `contact.name`: Name input
- `contact.email`: Email input
- `contact.phone`: Phone input (optional)
- `contact.state`: State selector
- `contact.subject`: Subject input
- `contact.message`: Message textarea

**Login Form** (`form` with fields):
- `login.username`: Username input
- `login.password`: Password input

## Bridge API Usage

The bridge is available globally at `window.__APP_BRIDGE__`.

### Discovery

```javascript
// Get well-known endpoint
const wellKnown = await window.__APP_BRIDGE__.getWellKnown();

// Get routes index
const index = await window.__APP_BRIDGE__.getIndex();

// Get page manifest
const manifest = await window.__APP_BRIDGE__.getPageManifest('home');

// Get capabilities pack
const pack = await window.__APP_BRIDGE__.getPack('/agent-assets/capabilities.json');
```

### Navigation

```javascript
// Navigate to a route
await window.__APP_BRIDGE__.navTo('contact');

// Get current route
const routeId = window.__APP_BRIDGE__.currentRoute(); // Returns: "home", "contact", etc.
```

### Reading KPIs

```javascript
// Read KPI values (converts snake_case manifest ID to kebab-case DOM selector)
const yearsExp = window.__APP_BRIDGE__.readKPI('home', 'years_experience'); // Returns: 8
const smsfCount = window.__APP_BRIDGE__.readKPI('home', 'smsf_administered'); // Returns: 300
```

### Dispatching Actions

```javascript
// Submit contact form
const result = await window.__APP_BRIDGE__.dispatch({
  type: 'SubmitContactForm',
  payload: {
    name: 'John Smith',
    email: 'john@example.com',
    phone: '0412 345 678',
    state: 'NSW',
    subject: 'SMSF Inquiry',
    message: 'I would like to know more about your services.'
  }
});

// Submit login
const loginResult = await window.__APP_BRIDGE__.dispatch({
  type: 'LoginUser',
  payload: {
    username: 'client@example.com',
    password: 'secure123'
  }
});
```

### Waiting for Conditions

```javascript
// Wait for element to appear
await window.__APP_BRIDGE__.waitFor(
  { type: 'dom', selector: '[data-ready="home-page"]' },
  { timeoutMs: 5000, pollMs: 100 }
);

// Wait for attribute value
await window.__APP_BRIDGE__.waitFor(
  { 
    type: 'domAttr', 
    selector: '[data-route]', 
    name: 'data-ready', 
    equals: 'contact-page' 
  },
  { timeoutMs: 3000 }
);
```

### Page Snapshot

```javascript
// Get compact page summary
const snapshot = window.__APP_BRIDGE__.snapshot();
console.log(snapshot);
// Returns:
// {
//   url: "https://example.com/",
//   title: "AusSuperSource | Expert SMSF...",
//   route: "home",
//   headings: [{ level: 1, text: "..." }, ...],
//   kpis: [{ id: "years-experience", value: "8+" }, ...],
//   actions: [{ id: "contact.submit", text: "Send Message" }, ...],
//   forms: [{ id: "contact.name", type: "text" }, ...],
//   lists: [{ id: "services", itemCount: 7 }, ...]
// }
```

## File Structure

```
public/
├── .well-known/
│   └── agent.json              # Discovery endpoint
├── agent-assets/
│   ├── index.json              # Routes index
│   ├── capabilities.json       # Capabilities pack
│   ├── manifests/
│   │   ├── home.json          # Home page manifest
│   │   ├── contact.json       # Contact page manifest
│   │   ├── login.json         # Login page manifest
│   │   ├── services.json      # Services page manifest
│   │   └── team.json          # Team page manifest
│   └── README.md              # This file
└── agent-bridge.js            # Bridge API implementation
```

## Implementation Notes

1. **Selectors**: All manifest selectors match actual DOM elements
2. **Errors**: Every action defines coded error states
3. **Visibility**: KPIs include `visibleWhen` conditions for async UIs
4. **Naming**: IDs are stable API-like names, not copy text
5. **State**: Use `data-ready` to signal page load completion

## Integration Checklist

- [x] Page roots have `data-route` and `data-contract-version`
- [x] Every manifest `selector` matches an element in HTML
- [x] Every KPI has `type` and `visibleWhen` conditions
- [x] Every action has coded `errors`
- [x] Capabilities pack contains all KPIs/actions from manifest
- [x] Names follow conventions (kebab for DOM, snake for manifest KPIs, dot for actions)
- [x] No reliance on visible text for logic

## Version

Current version: **1.0.0**

Last updated: October 27, 2025
