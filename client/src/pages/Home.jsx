import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Welcome to the SFBB home page</h2>
      <div>
        <Link className={styles.cta} to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
