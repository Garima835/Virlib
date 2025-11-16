import React from 'react';
import '../../Styling/Author_Feedback.css';

const feedbackData = [
  {
    bookTitle: 'Echoes of Eternity',
    reviews: [
      'A heartwarming journey of self-discovery.',
      'Well-paced narrative with relatable characters.',
      'The writing style is poetic and impactful.'
    ]
  },
  {
    bookTitle: 'Whispers of the Wind',
    reviews: [] // No feedback yet
  }
];

const FeedbackCard = ({ bookTitle, reviews }) => {
  return (
    <div className="envelope-card">
      <div className="envelope-header">
        <h4>{bookTitle}</h4>
      </div>
      <div className="feedback-card">
        {reviews.length ? (
          reviews.map((review, idx) => <p key={idx}>• {review}</p>)
        ) : (
          <p className="no-reviews">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

const Feedback = () => {
  return (
    <div className="feedback-container">
      <h2 className="feedback-heading">📩 Reader Feedback</h2>
      <div className="feedback-grid">
        {feedbackData.map((book, index) => (
          <FeedbackCard
            key={index}
            bookTitle={book.bookTitle}
            reviews={book.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;