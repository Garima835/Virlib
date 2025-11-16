import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: { type: String, enum: ["reader", "author", "admin"] },
  firstName: String,
  lastName: String,
  profileImage: String,
  booksPublished: { type: Number, default: 0 },
  averageRating: { type: Number, default: 0 },
  feedbackCount: { type: Number, default: 0 },
});

export default mongoose.model("User", userSchema);