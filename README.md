# React Todo Application

A modern, feature-rich Todo application built with React, TypeScript, and TailwindCSS.

## Features

- ✨ Create, read, update, and delete todos
- 📝 Add titles and descriptions to todos
- ✅ Mark todos as complete/incomplete
- 🗂 Separate views for completed and incomplete tasks
- 💾 Persistent storage using localStorage
- 🎨 Clean and responsive UI with TailwindCSS
- 🔒 TypeScript for type safety
- 📱 Mobile-friendly design

## Technologies Used

- React 18
- TypeScript
- TailwindCSS
- Local Storage for data persistence

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/abdulmuhaimin-work/magtest.git
cd todo-app
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Project Structure

- `/src`
  - `/components` - React components
  - `/hooks` - Custom React hooks
  - `/services` - Service layer for data management
  - `/types` - TypeScript interfaces and types
  - `App.tsx` - Main application component
  - `index.tsx` - Application entry point

## Features in Detail

### Todo Management
- Create new todos with title and optional description
- Edit existing todos
- Mark todos as complete/incomplete
- Delete todos with confirmation
- Separate sections for completed and incomplete todos

### Data Persistence
The application uses localStorage to persist todos between sessions, ensuring your data is saved even after closing the browser.

### Responsive Design
Built with a mobile-first approach using TailwindCSS, ensuring a great experience across all device sizes.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
