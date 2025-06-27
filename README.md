# Thoughtful AI Support Chatbot

A modern customer support AI agent built with Next.js 15 and TypeScript. Answers questions about Thoughtful AI's healthcare automation agents (EVA, CAM, PHIL).

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start chatting.

## What It Does

The chatbot can answer questions about:
- **EVA** - Eligibility verification
- **CAM** - Claims processing
- **PHIL** - Payment posting
- General benefits and information about Thoughtful AI agents

## How It Works

Uses intelligent matching to find the best answer from predefined responses. If no match is found, it provides helpful guidance.

## Tech Stack

- Next.js 15 + TypeScript
- Tailwind CSS for styling
- React Hooks for state management
- Custom question matching algorithm
- API-first architecture

## Project Structure

```
app/
├── api/
│   └── chat/
│       └── route.ts          # Chat API endpoint
├── components/
│   ├── ChatHeader.tsx        # Chat header component
│   ├── ChatInput.tsx         # Input component with suggestions
│   ├── ChatMessage.tsx       # Individual message component
│   └── LoadingIndicator.tsx  # Loading animation
├── constants/
│   └── chat.ts              # Centralized configuration
├── data/
│   ├── questions.ts         # Predefined Q&A data
│   └── responses.ts         # Rule-based response system
├── hooks/
│   └── useChat.ts           # Chat state management
├── types/
│   ├── api.ts              # API-specific types
│   └── chat.ts             # Chat-related types
├── utils/
│   ├── matchers.ts         # Question matching algorithms
│   ├── questionMatcher.ts  # Main matching orchestrator
│   ├── ruleHandler.ts      # Rule-based response handler
│   └── validation.ts       # Input validation utilities
├── globals.css             # Global styles
├── layout.tsx              # Root layout
└── page.tsx                # Main chat interface
```

## Adding Questions

Edit `app/data/questions.ts` to add new Q&A pairs:

```typescript
{
  question: "Your question?",
  answer: "Your answer."
}
```

## API Endpoints

### POST `/api/chat`
Send a chat message and receive a response.

### GET `/api/chat`
Health check endpoint.

## Building

```bash
npm run build
npm start
```

---

Built for Thoughtful AI technical screening challenge.
