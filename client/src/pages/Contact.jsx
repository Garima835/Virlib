import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
import "../Styling/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      form.current,
      'your_public_key'
    ).then(
      () => alert("Message sent successfully! 📬"),
      (error) => alert("Something went wrong. Please try again.")
    );

    e.target.reset();
  };

  return (
    <section className="contact-page">
      <h1>📮 Get in Touch with the Curators of the Library</h1>
      <p className="contact-intro">
        Have a question, feedback, or a bookish idea to share? We'd love to hear from you!
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required /> 
        <input type="email" name="user_email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject (Optional)" />
        <textarea name="message" rows="5" placeholder="Write your message here..." required />
        <button type="submit">📨 Send Message</button>
      </form>

      <div className="contact-details">
        {/* <p><strong>📧 Email:</strong> contact@Virlib.com</p> */}
        <p><strong>📍 Address:</strong> Virtual Library Archives, The Web Universe</p>
      </div>

      <div className="contact-social">
        <p>Follow us:</p>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-goodreads-g"></i></a>
      </div>
    </section>
  );
};

export default Contact;
