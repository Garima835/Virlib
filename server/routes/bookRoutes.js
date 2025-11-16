router.post("/add", async (req, res) => {
  try {
    const { title, genre, pages, description, cover, authorId } = req.body;

    // Check if authorId exists and is a valid author
    if (!authorId) {
      return res.status(400).json({ msg: "Author ID is required." });
    }

    const author = await User.findById(authorId);
    if (!author || author.role !== "author") {
      return res
        .status(403)
        .json({ msg: "You must be logged in as author to publish a book." });
    }

    // Create book
    const newBook = await Book.create({
      title,
      genre,
      pages,
      description,
      cover,
      authorId,
    });

    // Increment author's book count
    await User.findByIdAndUpdate(authorId, {
      $inc: { booksPublished: 1 },
    });

    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ msg: "Error adding book", error: err.message });
  }
});
