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

## Project Structure

```
app/
├── components/     # UI components
├── hooks/         # Custom hooks
├── utils/         # Question matching logic
├── data/          # Knowledge base
├── types/         # TypeScript interfaces
└── page.tsx       # Main app
```

## Adding Questions

Edit `app/data/thoughtfulAI.ts` to add new Q&A pairs:

```typescript
{
  question: "Your question?",
  answer: "Your answer."
}
```

## Building

```bash
npm run build
npm start
```

---

Built for Thoughtful AI technical screening challenge.
