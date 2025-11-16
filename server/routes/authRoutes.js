import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Book from "../models/Book.js";

const router = express.Router();

//AuthorRegister
router.post("/register/author", async (req, res) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      role: "author", // Set role to author
    });
    await newUser.save();
    res.status(201).json({ msg: "Author registered successfully" });
  } catch (error) {
    console.error("Error during author registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login/author", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, role: "author" });
    if (!user) return res.status(400).json({ msg: "Author not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: "Error logging in", error: err.message });
  }
});
// Reader Register
router.post("/register/reader", async (req, res) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ msg: "Username already exists" });

    const existingEmail = await User.findOne({ email });
    if (existingEmail)
      return res.status(400).json({ msg: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      role: "reader",
    });

    await newUser.save();
    res.status(201).json({ msg: "Reader registered successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Error registering reader", error: err.message });
  }
});

// Reader Login
router.post("/login/reader", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, role: "reader" });
    if (!user) return res.status(400).json({ msg: "Reader not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: "Error logging in", error: err.message });
  }
});

// GET /api/auth/author/:id
router.get("/author/:id", async (req, res) => {
  try {
    const author = await User.findById(req.params.id).select("-password");
    const books = await Book.find({ authorId: req.params.id });

    res.json({
      firstName: author.firstName,
      lastName: author.lastName,
      email: author.email,
      profileImage: author.profileImage || "",
      booksPublished: books.length,
      averageRating: author.averageRating || 0,
      feedbackCount: author.feedbackCount || 0,
    });
  } catch (err) {
    res.status(500).json({ msg: "Error fetching author profile" });
  }
});
export default router;