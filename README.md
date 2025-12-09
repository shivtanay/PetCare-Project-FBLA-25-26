<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Mythical Pet Care Adventure - FBLA Project

A React-based pet care simulation game where players adopt, nurture, and grow their own magical creature. The application features mini-games, pet care mechanics, and experience progression systems.

## Project Structure

The project is organized as follows:

```
src/
├── pages/
│   ├── PetAdopt.jsx          # Pet adoption page
│   ├── PetCare.jsx           # Main pet care gameplay page
│   └── Home.jsx              # Home/welcome page
├── components/
│   ├── pet/
│   │   ├── PetDisplay.jsx    # Pet visual display component
│   │   ├── StatBar.jsx       # Stats visualization component
│   │   ├── CareActions.jsx   # Care action buttons and logic
│   │   ├── ChoresMenu.jsx    # Chores/tasks menu component
│   │   ├── Achievements.jsx  # Achievements display
│   │   └── ExpenseChart.jsx  # Expense tracking chart
│   └── games/
│       ├── TrashGame.jsx     # Mini-game: Take out trash
│       ├── WindowGame.jsx    # Mini-game: Fix windows
│       └── WireGame.jsx      # Mini-game: Fix electrical wires
├── entities/
│   ├── Pet.js                # Pet data model
│   └── Expense.js            # Expense tracking model
├── Layout.js                 # Main layout component
└── App.js                    # Root application component
```

## Features

### Pet Mechanics
- **Lifecycle**: Egg (3 days) → Hatchling (5 days) → Adult
- **Stats**: Hunger, Happiness, Energy, Hygiene, Health
- **Experience System**: Tracks progress through pet stages (Egg: 0/3, Hatchling: 0/5)
- **Daily Progression**: Configurable day timers (45s minimum, decreasing by 5s every 5 days to 10s minimum)
- **Cost Scaling**: Pet care costs increase 20% every 5 days as pet grows

### Care Actions
- **Feed**: 10 coins
- **Play**: 5 coins  
- **Clean**: 7 coins
- **Health Check**: 15 coins
- **Insurance**: 0.5 coins per 5 days (age-based)

### Mini-Games
- **Trash Game**: Take out trash for 5-10 coins (15-second timer)
- **Wire Game**: Fix electrical connections (15-second timer)
- **Window Game**: Fix broken windows

### Data Tracking
- Expense chart showing all purchases
- Running total of care-related expenses
- Pet age and stage progression
- Help system and pet reset functionality

## Technology Stack
- React
- React Router for navigation
- Framer Motion for animations
- Lucide React for icons
- Tailwind CSS for styling

## Current Status
All core game mechanics have been implemented and tested. Game is ready for deployment.
>>>>>>> c1ab2ec947c84de1a8905ed6a97afc2a0e437aec
