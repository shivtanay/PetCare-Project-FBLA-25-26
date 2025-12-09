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
