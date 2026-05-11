# Keylo AI Companion

<p align="center">
  <strong>AI companion web app prototype with chat, reflection, creative modes, onboarding, pricing, account, and billing flows.</strong>
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-blue">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-TypeScript-purple">
  <img alt="Testing" src="https://img.shields.io/badge/Testing-Vitest%20%2B%20Playwright-0f766e">
  <img alt="Product" src="https://img.shields.io/badge/Product-AI%20Companion-black">
</p>

---

## Overview

Keylo AI Companion is a frontend product prototype for an AI companion experience. The app includes a public landing page, authentication screens, onboarding, pricing, chat modes, account pages, billing flow, and legal/contact pages.

The current implementation uses local UI state and demo chat responses. It is structured as a product-ready frontend foundation that can later connect to real authentication, subscription, and AI backend services.

## Problem Solved

Many AI chat interfaces are technically functional but lack product structure around onboarding, pricing, account management, and user modes. Keylo explores how an AI companion product can support different user intents:

- General conversation
- Personal reflection
- Creative brainstorming
- Guest/free usage limits
- Upgrade and paywall moments
- Account and billing management

## Features

| Feature | Description |
|---|---|
| Landing page | Marketing/product homepage with feature, pricing, FAQ, and footer sections |
| Chat experience | Companion-style chat interface with multiple conversation modes |
| Reflection mode | Slower, guided prompts for self-reflection and journaling-style interaction |
| Creative mode | Prompts oriented around imagination, writing, and idea generation |
| Guest/free limits | Demo usage limits with upsell/paywall modal concepts |
| Authentication screens | Login, signup, forgot password, and onboarding routes |
| Account and billing pages | Product structure for user profile and subscription management |
| Legal pages | Privacy, terms, refund policy, and contact page routes |
| Testing setup | Vitest and Playwright configuration are present |

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| Routing | React Router |
| UI | Radix UI primitives, shadcn/ui-style components, Tailwind CSS |
| State/data | React state, TanStack Query foundation |
| Animation | Framer Motion |
| Markdown rendering | react-markdown |
| Icons | lucide-react |
| Testing | Vitest, Testing Library, Playwright |

## Architecture

```text
keylo-ai-companion/
├── src/
│   ├── App.tsx                 # App providers and route definitions
│   ├── components/             # Shared UI, chat, landing, and navigation components
│   ├── hooks/                  # Shared hooks
│   ├── lib/                    # Utilities
│   ├── pages/                  # Route-level pages
│   └── test/                   # Test setup and examples
├── public/                     # Static assets
├── playwright.config.ts
├── vitest.config.ts
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/Arungharami/keylo-ai-companion.git
cd keylo-ai-companion
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local development URL, usually:

```text
http://localhost:5173
```

### Build

```bash
npm run build
npm run preview
```

### Test

```bash
npm run test
```

Optional watch mode:

```bash
npm run test:watch
```

## Usage Instructions

Suggested product walkthrough:

1. Open the landing page at `/`.
2. Review pricing and feature sections.
3. Try the signup or onboarding flow.
4. Open `/app/chat` for the companion chat experience.
5. Switch between chat, reflection, and creative modes.
6. Review account and billing pages for SaaS product structure.

## Screenshots

Add screenshots after the interface is finalized.

Suggested screenshot set:

```text
assets/screenshots/
├── landing-page.png
├── chat-mode.png
├── reflection-mode.png
├── pricing.png
└── billing.png
```

## Roadmap

### Phase 1: Portfolio readiness

- Replace starter README with product documentation
- Add screenshots and demo link
- Add repository topics
- Clarify current demo/local-state limitations

### Phase 2: Product integration

- Connect real authentication provider
- Connect real LLM backend
- Add persistent conversation history
- Add subscription and billing provider integration

### Phase 3: Trust and safety

- Add privacy-focused data handling documentation
- Add content safety and escalation rules
- Add user controls for deleting/exporting conversations
- Add reliability and abuse-prevention notes

## Security Notes

- Do not commit API keys, `.env` files, provider tokens, payment secrets, or private user data.
- Keep future AI provider calls behind a backend service rather than exposing private keys in the browser.
- Treat chat transcripts as sensitive user data if persistence is added.

## Related Links

- Lead.AI: https://www.lead-ai.us
- GitHub: https://github.com/Arungharami
- Hugging Face: https://huggingface.co/arun-gharami
- Lead.AI Labs: https://huggingface.co/lead-ai-labs
- Google Scholar: https://scholar.google.com/citations?user=uy4i5soAAAAJ&hl=en

## Author

**Arun Kumar Gharami**  
AI Engineer · Applied Researcher · QA Automation Engineer

Focus areas: trustworthy AI, explainable AI, AI SaaS platforms, business automation, QA automation, and applied product engineering.

## License

No license file was confirmed during this documentation pass. Add a license before external reuse, distribution, or collaboration.
