import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const isLoggedIn = false; // Replace with actual logic to check login status

  return (
    <div className={styles.page}>
      <h2>Welcome to the SFBB home page</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {!isLoggedIn && (
          <>
            <Link className={styles.cta} to="/login">
              Login
            </Link>
            <Link className={styles.cta} to="/register">
              Register
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link className={styles.cta} to="/dashboard">
              Dashboard
            </Link>
            <Link className={styles.cta} to="/message-board">
              Message Board
            </Link>
          </>
        )}
        <Link className={styles.cta} to="/blog">
          Blog
        </Link>
      </div>
    </div>
  );
}
