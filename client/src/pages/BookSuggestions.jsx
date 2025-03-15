import { useState } from "react";
import styles from "./BookSuggestions.module.css";

export default function BookSuggestions() {
  const [formData, setFormData] = useState({ title: "", author: "" });
  const [suggestions, setSuggestions] = useState([]); // State to store suggestions

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSuggestion = { ...formData, id: Date.now(), votes: 0 }; // Add unique ID and votes
    setSuggestions((prev) => [...prev, newSuggestion]); // Add new suggestion to the list
    setFormData({ title: "", author: "" }); // Reset form
  };

  const handleVote = (id, delta) => {
    setSuggestions((prev) =>
      prev.map((suggestion) =>
        suggestion.id === id
          ? { ...suggestion, votes: suggestion.votes + delta }
          : suggestion
      )
    );
  };

  return (
    <div>
      <h2>Book Suggestions</h2>
      <p>
        Have a book you'd like to suggest for a next read? Enter the title and
        author below!
      </p>
      <form className={styles.suggestionsForm} onSubmit={handleSubmit}>
        <label htmlFor="title">Book Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter book title"
          required
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter author's name"
          required
        />
        <button type="submit">Submit Suggestion</button>
      </form>

      <div>
        <h3>Suggestions</h3>
        {suggestions.length === 0 ? (
          <p>No suggestions yet. Be the first to suggest a book!</p>
        ) : (
          <ul className={styles.suggestionsList}>
            {suggestions.map((suggestion) => (
              <li key={suggestion.id}>
                <p>
                  <strong>{suggestion.title}</strong> by {suggestion.author}
                </p>
                <div>
                  <button onClick={() => handleVote(suggestion.id, 1)}>
                    👍
                  </button>
                  <span>{suggestion.votes}</span>
                  <button onClick={() => handleVote(suggestion.id, -1)}>
                    👎
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
