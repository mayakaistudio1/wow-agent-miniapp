# Wow Agent - AI Sales Assistant Web App

## Overview

Wow Agent is a Telegram mini-app designed to showcase an AI-powered digital sales employee. The application demonstrates a "wow effect" through live video/voice conversations with an AI avatar that can greet customers, conduct presentations, handle objections, and guide users toward taking action (like submitting leads). The goal is to generate interest and lead submissions from businesses wanting similar AI agents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS v4 with custom theme variables, shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state, local React state for UI
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **UI Design**: Mobile-first approach with a premium warm beige/cream color scheme, designed to look like a phone app even on desktop (400px max-width container with rounded corners)

### Backend Architecture

- **Framework**: Express.js v5 running on Node.js
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Build**: ESBuild for server bundling, Vite for client bundling
- **Development**: Hot module replacement via Vite middleware in dev mode

### Data Storage

- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Tables**: 
  - `users` - basic user authentication (id, username, password)
  - `leads` - contact form submissions (name, contact info, business goal)
- **Migrations**: Drizzle Kit with `db:push` command

### Key Features

1. **Live Avatar Video Chat**: Integration with HeyGen/LiveAvatar API for real-time AI video conversations using LiveKit for WebRTC
2. **Text Chat**: Demo text conversation with simulated AI responses
3. **Presentation Slides**: Interactive slide-based presentation explaining the service
4. **Lead Capture**: Contact form that stores submissions to the database

### HeyGen LiveAvatar Integration

The video chat uses a dual-mechanism approach to prevent microphone freeze issues:
- Primary: HeyGen API events (`avatar_start_talking`, `avatar_stop_talking`)
- Backup: LiveKit's `ActiveSpeakersChanged` event monitoring

Server routes handle session token generation, session start/stop, and event forwarding to the LiveAvatar API.

## External Dependencies

### Third-Party APIs
- **HeyGen LiveAvatar API**: Powers the AI video avatar conversations
  - Requires: `LIVEAVATAR_API_KEY`, `LIVEAVATAR_AVATAR_ID`, `LIVEAVATAR_VOICE_ID`, `LIVEAVATAR_CONTEXT_ID`
  - Base URL: `https://api.liveavatar.com/v1`

### Real-Time Communication
- **LiveKit**: WebRTC library for handling video/audio streaming with the avatar

### Database
- **PostgreSQL**: Primary data store, connection via `DATABASE_URL` environment variable

### Key npm Packages
- `livekit-client`: WebRTC client for avatar video streaming
- `drizzle-orm` / `drizzle-kit`: Database ORM and migrations
- `framer-motion`: Animation library
- `@tanstack/react-query`: Server state management
- `@radix-ui/*`: Accessible UI primitives for shadcn components
- `wouter`: Lightweight React router