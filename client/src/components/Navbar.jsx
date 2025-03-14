import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <h1>📚 SFBB</h1>
        <ul className={styles.navbarList}>
          <li>
            {/* Home */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Calendar */}
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            {/* Messages */}
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            {/* Suggestions */}
            <Link to="/suggestions">Suggestions</Link>
          </li>
          <li>
            {/* Login */}
            <Link to="/login">Login</Link>
          </li>
          <li>
            {/* Burn Book */}
            <Link to="/burnbook">Burn Book</Link>
          </li>
        </ul>
      </nav>
      <div style={{ marginTop: "60px" }}>
        {/* Add this wrapper to push content below the navbar */}
        {/* ...existing content goes here... */}
      </div>
    </div>
  );
}
