const mongoose = require("mongoose");

const SuggestionSchema = new mongoose.Schema({
  bookTitle: { type: String, required: true },
  author: { type: String, required: true },
  suggestedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  votes: { type: Number, default: 0 }, // Upvotes for popular books
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Suggestion", SuggestionSchema);
