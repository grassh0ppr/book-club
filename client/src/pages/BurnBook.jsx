import { useState } from "react";
import styles from "./BurnBook.module.css";

function BurnBook() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ book: "", rant: "", rating: "3" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, form]);
    setForm({ book: "", rant: "", rating: "3" });
  };

  return (
    <div className={styles.container}>
      <h2>🔥 The Burn Book 🔥</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Book Title"
          value={form.book}
          onChange={(e) => setForm({ ...form, book: e.target.value })}
          required
        />
        <textarea
          placeholder="Why did you DNF this book?"
          value={form.rant}
          onChange={(e) => setForm({ ...form, rant: e.target.value })}
          required
        />
        <label>
          DNF Rating:
          <select
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
          >
            <option value="1">1 – Just Not My Thing</option>
            <option value="2">2 – Boring But Harmless</option>
            <option value="3">3 – Mid</option>
            <option value="4">4 – Painful Read</option>
            <option value="5">5 – Personally Offended Me</option>
          </select>
        </label>
        <button type="submit">🔥 Roast It</button>
      </form>

      <div className={styles.entries}>
        {entries.map((entry, index) => (
          <div key={index} className={styles.entry}>
            <h3>{entry.book}</h3>
            <p>{entry.rant}</p>
            <span>🔥 DNF Rating: {entry.rating}/5</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BurnBook;
