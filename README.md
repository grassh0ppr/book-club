# Santa Fe Book Club App

## Built with React + Vite, Express, MongoDB

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## About the Santa Fe Book Club App

The Santa Fe Book Club App is designed for the Santa Fe Book Babes. This app will feature:

- **Login**: Secure user authentication.
- **Calendar Events**: Keep track of upcoming book club meetings and events.
- **Messaging Board**: A place for members to communicate and discuss.
- **Book Suggestion Box**: Suggest and vote on books to read next.
- **Burn Book**: A fun section inspired by the Burn Book from the film Mean Girls (2004).

This is a portfolio project with a playful twist, aiming to provide a fun and engaging experience for book club members.


## Project Structure
```
/project-root
│── /client
│   │── /public           # Static assets (favicon, index.html, etc.)
│   │── /src              # Source code for the React app
│   │   │── /components   # Reusable UI components
│   │   │── /pages        # Page components (Home, Login, etc.)
│   │   │── /styles       # Global and component-specific styles
│   │   ├── App.jsx       # Main App component
│   │   ├── main.jsx      # React entry point
│   ├── package.json      # Frontend dependencies
│   ├── vite.config.js    # (if using Vite) or webpack.config.js
│
│── /server
│   │── /routes           # Express routes
│   │── /models           # Database models
│   │── /controllers      # Logic for handling requests
│   │── /config           # Configuration files
│   ├── server.js         # Main Express server
│   ├── package.json      # Backend dependencies
│
├── .gitignore
├── README.md
```
