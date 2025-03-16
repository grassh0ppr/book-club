import React from "react";
import styles from "./Dashboard.module.css";
import UserProfile from "../components/UserProfile";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="/home">Home</a>
        <a href="/profile">Profile</a>
        <a href="/settings">Settings</a>
      </nav>
      <h1>Welcome to your Dashboard!</h1>
      <p>We're glad to have you here. Explore the book club features!</p>
      <UserProfile />
      {/* <button className={styles.button}>Get Started</button> */}
    </div>
  );
}
