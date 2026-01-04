# Race Calendar

## Overview
A React-based race calendar application built with Vite, TypeScript, and Chakra UI.

## Tech Stack
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **UI Library**: Chakra UI v3
- **State Management**: use-immer
- **Styling**: Emotion (CSS-in-JS)
- **Code Quality**: Biome (linter/formatter)

## Project Structure
```
src/
├── components/
│   └── ui/           # Chakra UI component wrappers
├── App.tsx           # Main application component
├── App.css           # Application styles
├── main.tsx          # Application entry point
├── state.tsx         # State management
└── types.ts          # TypeScript type definitions
```

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Lint/Format**: `npm run lint`

## Configuration
- Vite configured to run on port 5000 with host 0.0.0.0 for Replit compatibility
- All hosts allowed for proxy support
