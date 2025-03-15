import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Welcome to the SFBB home page</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link className={styles.cta} to="/login">
          Login
        </Link>
        <Link className={styles.cta} to="/blog">
          Blog
        </Link>
      </div>
    </div>
  );
}
