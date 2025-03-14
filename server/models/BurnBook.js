const mongoose = require("mongoose");

const BurnBookSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  rant: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  tags: [{ type: String }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BurnBook", BurnBookSchema);
