import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styling/bookRequest.css"; // You can style it however you like

const BookRequest = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "your_service_id",     // Replace with your EmailJS Service ID
        "your_template_id",    // Replace with your EmailJS Template ID
        form.current,
        "your_user_public_key" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Request sent successfully! 📚");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send request. Please try again.");
        }
      );
  };

  return (
    <div className="book-request-page">
      <h2>📬 Request a Book</h2>
      <p>If you couldn’t find the book you were looking for, let us know here.</p>

      <form ref={form} onSubmit={sendEmail} className="book-request-form">
        <label>📖 Book Name:</label>
        <input type="text" name="book_name" required placeholder="e.g., The Midnight Library" />

        <label>✍️ Author:</label>
        <input type="text" name="author" required placeholder="e.g., Matt Haig" />

        <label>📝 Description / Message:</label>
        <textarea name="message" rows="5" placeholder="Tell us more about the book..."></textarea>

        <button type="submit">Send Request</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default BookRequest;
