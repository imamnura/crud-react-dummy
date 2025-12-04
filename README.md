# 📝 Todo Manager - Feature-Based React App

A modern, feature-based Todo application built with React, Vite, and vanilla CSS. This project demonstrates clean architecture, reusable components, and modern UI/UX design principles.

![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)

## ✨ Features

- 📦 **Feature-Based Architecture** - Organized by features, not file types
- 🎨 **Modern UI/UX** - Gradient backgrounds, smooth animations, hover effects
- ♻️ **Reusable Components** - DRY principles with component library
- 🔄 **CRUD Operations** - Create, Read, Update, Delete tasks
- 🌐 **API Integration** - Fetches initial data from JSONPlaceholder
- 🎯 **Filter System** - Filter by Incomplete, Completed, or All tasks
- ✅ **Checkbox Toggle** - Quick task completion status toggle
- ✏️ **Inline Editing** - Edit tasks in place without navigation
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎭 **Smooth Animations** - CSS animations for better UX
- 🎨 **Custom Styling** - Pure CSS, no external UI libraries

## 🏗️ Architecture

### Feature-Based Structure

```
src/
├── components/
│   └── ui/                    # Reusable UI components
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Textarea.jsx
│       ├── Card.jsx
│       ├── Badge.jsx
│       ├── Checkbox.jsx
│       └── *.css             # Component-specific styles
├── features/
│   └── tasks/                # Task feature module
│       ├── AddTaskForm.jsx
│       ├── FilterBar.jsx
│       ├── TaskList.jsx
│       ├── TaskItem.jsx
│       ├── *.css
│       └── index.js          # Feature exports
├── contexts/
│   └── TasksContext.jsx      # Global state management
├── hooks/
│   └── useTasks.js           # Custom hooks
├── styles/
│   ├── global.css            # Global styles & CSS variables
│   └── App.css               # App-specific styles
├── App.jsx                    # Main app component
└── main.jsx                   # Entry point
```

### Key Benefits

✅ **Scalability** - Easy to add new features without affecting others  
✅ **Maintainability** - Related files grouped together  
✅ **Reusability** - UI components can be used anywhere  
✅ **Separation of Concerns** - Clear responsibility for each module  
✅ **Developer Experience** - Intuitive folder structure

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (or npm/yarn)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd crud-react-dummy
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open browser**

   Navigate to [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
# Build the app
pnpm build

# Preview production build
pnpm preview
```

## 🎨 UI Components Library

### Button

```jsx
import { Button } from "./components/ui";

<Button variant="primary" size="medium" onClick={handleClick}>
  Click Me
</Button>;
```

**Variants:** `default`, `primary`, `danger`, `success`, `outline`  
**Sizes:** `small`, `medium`, `large`

### Input

```jsx
import { Input } from "./components/ui";

<Input
  label="Title"
  placeholder="Enter title"
  value={value}
  onChange={handleChange}
  required
/>;
```

### Card

```jsx
import { Card } from "./components/ui";

<Card className="custom-class">{children}</Card>;
```

### Badge

```jsx
import { Badge } from "./components/ui";

<Badge variant="primary">API</Badge>;
```

**Variants:** `default`, `primary`, `success`, `warning`, `danger`

### Checkbox

```jsx
import { Checkbox } from "./components/ui";

<Checkbox checked={isChecked} onChange={handleChange} label="Optional label" />;
```

## 🎯 Features Detail

### 1. Task Management

- **Add Tasks** - Create new tasks with title and optional description
- **Edit Tasks** - Inline editing with save/cancel actions
- **Delete Tasks** - Remove tasks with one click
- **Toggle Complete** - Quick checkbox to mark completion status

### 2. Filtering

- **Incomplete** - Show only pending tasks
- **Completed** - Show only finished tasks
- **All** - Show all tasks

### 3. API Integration

- Fetches 15 initial tasks from [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Tasks from API are marked with a blue "API" badge
- All operations are local (no persistence to API)

### 4. State Management

- Context API for global state
- Custom `useTasks` hook for consuming state
- Efficient re-renders with proper memoization

### 5. Modern UI/UX

- **Gradient backgrounds** - Eye-catching color transitions
- **Smooth animations** - Slide-in, fade, float effects
- **Hover effects** - Interactive feedback on all clickable elements
- **Loading states** - Spinner animation while fetching
- **Error handling** - Graceful error display
- **Empty states** - Friendly messages when no tasks

## 🎨 Design System

### Color Palette

```css
--color-primary: #3b82f6     /* Blue */
--color-success: #10b981     /* Green */
--color-warning: #fbbf24     /* Yellow */
--color-danger: #ef4444      /* Red */
--bg-primary: #0f172a        /* Dark blue */
--bg-secondary: #1e293b      /* Lighter dark */
--text-primary: #f3f4f6      /* White-ish */
--text-muted: #9ca3af        /* Gray */
```

### Animations

- **slideIn** - Task items slide from left
- **fadeIn** - Smooth opacity transition
- **float** - Gentle up-down motion for icons
- **pulse** - Subtle breathing effect for header
- **bounce** - Playful bounce for empty state icons

## 📦 Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
```

## 🔧 Configuration

### Vite Config

The project uses Vite with React SWC plugin for fast refresh and optimal build performance.

### ESLint

Configured with React hooks rules to ensure best practices.

## 🚀 Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
pnpm build
# Drag & drop `dist` folder to Netlify
```

## 📝 Best Practices Implemented

✅ **Component Composition** - Small, focused, reusable components  
✅ **Separation of Concerns** - Logic separated from presentation  
✅ **DRY Principle** - No repeated code, shared UI components  
✅ **Semantic HTML** - Proper use of HTML5 elements  
✅ **Accessibility** - Labels, focus states, keyboard navigation  
✅ **Performance** - Optimized re-renders, lazy evaluation  
✅ **CSS Organization** - Component-scoped styles, CSS variables  
✅ **Error Handling** - Try-catch blocks, error states  
✅ **Code Readability** - Clear naming, comments where needed

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Free fake API for testing
- [React](https://react.dev/) - The library for web and native user interfaces
- [Vite](https://vite.dev/) - Next generation frontend tooling
- Design inspiration from modern SaaS applications

---

⭐ If you find this project helpful, please give it a star!
