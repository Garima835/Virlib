// PublishedWork.jsx
import React from 'react';
import '../../Styling/Published_work.css';
import sampleCover from '../../assets/Images/virlib_logo.png'; // replace with your actual path

const PublishedWork = ({ books = [] }) => {

  const sampleBook = {
    title: "Echoes of the Mind",
    author: "Garima Gupta",
    year: 2025,
    rating: 4.8,
    reviews: 122,
    cover: sampleCover,
    genre: "Psychological Fiction",
    description: "A thrilling journey through the fractured thoughts of a genius mind unraveling secrets."
  };
  // SAMPLE BOOK
  // const BookCard = ({ book }) => {
  //   return (
  //     <div className="book-card">
  //       <img className="book-cover" src={book.cover} alt="Book cover" />
  //       <div className="book-details">
  //         <h4>{book.title}</h4>
  //         <p><strong>Author:</strong> {book.author}</p>
  //         <p><strong>Genre:</strong> {book.genre}</p>
  //         <p><strong>Published:</strong> {book.year}</p>
  //         <p><strong>Rating:</strong> ⭐ {book.rating} ({book.reviews} reviews)</p>
  //         <br/>
  //         <p className="book-desc">{book.description}</p>
  //       </div>
  //     </div>
  //   );
  // };  

  return (
    <div className="published-container">
      {books.length === 0 ? (
        <div className="no-books-msg">No books published yet.<br/> It's your sign to begin your Literary Journey :) <br/>
        <br/> <br/><strong>Coming soon: Your literary legacy!</strong></div>
      ) : (
        books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))
      )}

      {/* Preview with Sample Book */}
      {/* <h3 className="preview-title">📖 My Book</h3>
      <BookCard book={sampleBook} /> */}

    </div>
  );
};



export default PublishedWork;
