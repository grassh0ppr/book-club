import React from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1>Welcome to your Dashboard!</h1>
      <p>We're glad to have you here. Explore the book club features!</p>
    </div>
  );
}
