# Keylo AI Companion

AI companion product prototype for conversational support, reflection, creative brainstorming, onboarding, pricing, and account workflows.

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-TypeScript-purple)
![Testing](https://img.shields.io/badge/Testing-Vitest%20%2B%20Playwright-0f766e)
![Product](https://img.shields.io/badge/Product-AI%20Companion-black)

## Live Demo / Website / Related Links

No live demo is currently published for this repository.

- Repository: https://github.com/Arungharami/keylo-ai-companion
- Lead.AI: https://www.lead-ai.us
- GitHub: https://github.com/Arungharami
- Hugging Face: https://huggingface.co/arun-gharami
- Lead.AI Labs: https://huggingface.co/lead-ai-labs
- Google Scholar: https://scholar.google.com/citations?user=uy4i5soAAAAJ&hl=en

## Overview

Keylo AI Companion is a frontend prototype for an AI companion web product. It includes a landing page, authentication screens, onboarding, pricing, companion chat, account pages, billing flow, and legal/contact pages.

The current implementation is a product and UI foundation. Chat behavior is simulated with local state and demo responses, so the repository should be reviewed as a frontend MVP/prototype rather than a production AI system.

## Problem Solved

Many AI chat demos focus only on the conversation window. A serious AI companion product also needs onboarding, user-mode selection, account management, free/paid usage boundaries, privacy pages, and a path toward safe backend integration.

Keylo explores that broader product structure by combining companion chat, reflection mode, creative mode, guest usage limits, paywall concepts, and subscription-oriented screens in one React application.

## Key Features

| Feature | Description |
| --- | --- |
| Landing page | Product homepage with hero, features, how-it-works, pricing, FAQ, testimonials, and footer sections |
| Chat interface | Companion-style chat page with conversation sidebar, local message state, and markdown rendering |
| Chat modes | Supports chat, reflection, and creative modes through a mode selector |
| Guest and free limits | Includes guest/free message limits with upsell and paywall modal concepts |
| Authentication screens | Login, signup, forgot password, and onboarding routes are present |
| Account and billing flows | Account and billing pages model a subscription product surface |
| Legal pages | Privacy, terms, refund policy, and contact pages are included |
| Testing foundation | Vitest, Testing Library, and Playwright configuration are present |

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 18, TypeScript, Vite |
| Routing | React Router |
| UI system | Radix UI primitives, shadcn/ui-style components, Tailwind CSS |
| State/data foundation | React state, TanStack Query |
| Animation | Framer Motion |
| Markdown | react-markdown |
| Icons | lucide-react |
| Testing | Vitest, Testing Library, Playwright |
| Package tooling | npm lockfile and Bun lockfiles are present |

## Architecture / Folder Structure

```text
keylo-ai-companion/
|-- public/
|   |-- favicon.ico
|   |-- placeholder.svg
|   `-- robots.txt
|-- src/
|   |-- App.tsx
|   |-- main.tsx
|   |-- components/
|   |   |-- chat/
|   |   |-- landing/
|   |   `-- ui/
|   |-- hooks/
|   |-- lib/
|   |-- pages/
|   `-- test/
|-- package.json
|-- vite.config.ts
|-- vitest.config.ts
|-- playwright.config.ts
|-- tailwind.config.ts
`-- README.md
```

Important files:

- `src/App.tsx` defines the application routes and shared providers.
- `src/pages/ChatPage.tsx` contains the local companion chat experience.
- `src/components/chat/ModeSelector.tsx` defines chat, reflection, and creative modes.
- `src/components/landing/` contains the public marketing/product page sections.
- `src/components/ui/` contains reusable UI components.

## Setup Instructions

Prerequisites:

- Node.js 18 or newer
- npm

Install dependencies:

```bash
git clone https://github.com/Arungharami/keylo-ai-companion.git
cd keylo-ai-companion
npm install
```

Run the local development server:

```bash
npm run dev
```

Vite will print the local URL, commonly:

```text
http://localhost:5173
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Usage Flow

1. Open `/` to review the public landing page.
2. Visit `/pricing` to review the subscription-oriented pricing flow.
3. Use `/signup`, `/login`, `/forgot-password`, and `/onboarding` to review account entry screens.
4. Open `/app/chat` for the companion chat prototype.
5. Switch between chat, reflection, and creative modes.
6. Trigger guest/free usage boundaries to review upsell and paywall modal behavior.
7. Review `/app/account`, `/app/billing`, `/privacy`, `/terms`, `/refund-policy`, and `/contact` for product completeness.

## Screenshots Section

Screenshots are not currently included in the repository.

Recommended future screenshot paths:

```text
assets/screenshots/
|-- landing-page.png
|-- chat-mode.png
|-- reflection-mode.png
|-- creative-mode.png
|-- pricing-page.png
`-- billing-page.png
```

## Results / Metrics / Model Notes

This is an AI companion frontend prototype, not a trained model repository.

Current AI/model status:

- Chat responses are simulated in the frontend with local demo response arrays.
- No production LLM provider integration is included.
- No backend API, authentication provider, database, or payment provider is currently wired in.
- `ModeSelector` includes mode-specific prompt concepts that can guide a future backend implementation.

Recommended future model/backend work:

- Add a backend route for AI provider calls.
- Keep AI provider keys server-side.
- Add conversation persistence only after privacy and deletion/export flows are designed.
- Add safety handling for crisis, self-harm, abuse, and medical/legal/financial advice boundaries.
- Add rate limiting, audit logging, and abuse prevention before public release.

## Security Notes

- Do not expose LLM provider keys, payment secrets, auth secrets, or database credentials in the browser.
- Use environment variables and a backend service for future AI, auth, billing, and database integrations.
- Treat chat history as sensitive user data if persistence is added.
- Add privacy controls for deleting and exporting user conversations before production use.
- This repository is a prototype and should not be marketed as a production-ready mental health, medical, legal, or financial advice product.

## Roadmap

- Add hosted demo link when available.
- Add repository-owned screenshots.
- Rename package metadata from the starter name to `keylo-ai-companion`.
- Connect real authentication.
- Add a backend AI service with server-side provider keys.
- Add persistent conversation history with delete/export controls.
- Connect subscription and billing provider flows.
- Add production-grade safety, privacy, and escalation guidance.
- Expand Playwright coverage for landing, signup, chat, pricing, and billing flows.

## Author / Contact

**Arun Kumar Gharami**

AI Engineer | Applied Researcher | QA Automation Engineer

- Lead.AI: https://www.lead-ai.us
- GitHub: https://github.com/Arungharami
- Hugging Face: https://huggingface.co/arun-gharami
- Lead.AI Labs: https://huggingface.co/lead-ai-labs
- Google Scholar: https://scholar.google.com/citations?user=uy4i5soAAAAJ&hl=en

## License Note

No license file was confirmed during this documentation pass. Add a license before external reuse, distribution, or collaboration.
