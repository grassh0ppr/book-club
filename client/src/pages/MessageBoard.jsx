import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase"; // Import Firestore instance
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import styles from "./MessageBoard.module.css";

const MessageBoard = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Fetch messages in real-time
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        sender: user.email,
        timestamp: new Date(),
      });
      setMessage(""); // Clear the input field
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>📚 Book Club Chat</h1>
      <div className={styles.chatBox}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.message} ${
              msg.sender === user?.email ? styles.myMessage : ""
            }`}
          >
            <p>
              <strong>{msg.sender}</strong>: {msg.text}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className={styles.form}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default MessageBoard;
