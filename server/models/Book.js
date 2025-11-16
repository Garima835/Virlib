import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  genre: String,
  pages: Number,
  description: String,
  cover: String, // base64 or URL
  rating: { type: Number, default: 0 },
  feedbacks: [String],
});
export default mongoose.model("Book", bookSchema);
