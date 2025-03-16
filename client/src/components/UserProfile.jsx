import React, { useState } from "react";
import styles from "./UserProfile.module.css";

export default function UserProfile() {
  const [user, setUser] = useState({
    avatar: "https://via.placeholder.com/100",
    name: "John Doe",
    location: "New York, USA",
    hobbies: "Reading, Hiking, Cooking",
    favoriteBooks: "1984, To Kill a Mockingbird, The Great Gatsby",
  });

  const handleEdit = () => {
    // Logic for editing user details can be implemented here
    alert("Edit functionality coming soon!");
  };

  return (
    <div className={styles.profile}>
      <img src={user.avatar} alt="User Avatar" className={styles.avatar} />
      <div className={styles.info}>
        <h2>{user.name}</h2>
        <p>
          <strong>Location:</strong> {user.location}
        </p>
        <p>
          <strong>Hobbies:</strong> {user.hobbies}
        </p>
        <p>
          <strong>Favorite Books:</strong> {user.favoriteBooks}
        </p>
      </div>
      <button className={styles.editButton} onClick={handleEdit}>
        Edit Profile
      </button>
    </div>
  );
}
