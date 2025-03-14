import { useState } from "react";
import styles from "./BurnBook.module.css";

function BurnBook() {
  const [posts, setPosts] = useState([]);
  const [book, setBook] = useState("");
  const [roast, setRoast] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book && roast) {
      setPosts([{ book, roast }, ...posts]);
      setBook("");
      setRoast("");
    }
  };

  return (
    <div className={styles.container}>
      <h2>🔥 Burn Book: Where Books Get Roasted</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          required
        />
        <textarea
          placeholder="Why did you DNF?"
          value={roast}
          onChange={(e) => setRoast(e.target.value)}
          required
        />
        <button type="submit">Post Roast</button>
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <strong>{post.book}</strong>: {post.roast}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BurnBook;
