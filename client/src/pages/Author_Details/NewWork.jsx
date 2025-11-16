import React, { useState } from 'react';
import '../../Styling/AddWork.css';

const AddWork = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    pages: '',
    description: '',
    cover: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Book Data:", formData);
    alert("📚 Book added successfully!");
    // Add Firestore upload logic here later
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label>
          <span>Book Title:
          <input type="text" name="title" required value={formData.title} onChange={handleChange} /></span>
        </label>

        <label>
          <span>Author Name:
          <input type="text" name="author" required value={formData.author} onChange={handleChange} /></span>
        </label>

        <label>
          <span>Genre:
          <input type="text" name="genre" required value={formData.genre} onChange={handleChange} /></span>
        </label>

        <label>
          <span>Number of Pages:
          <input type="number" name="pages" required value={formData.pages} onChange={handleChange} /></span>
        </label>

        <label>
          <span>Book Description:</span>
          <textarea name="description" required value={formData.description} onChange={handleChange} />
        </label>

        <label className="file-upload-label">
          <span>Cover Page:
          <input type="file" name="cover" accept="image/*" onChange={handleChange} /></span>
        </label>

        <button type="submit">📘 Add Book</button>
      </form>
    </div>
  );
};

export default AddWork;
