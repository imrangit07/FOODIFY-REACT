import React from "react";
import "../CSS/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Get In Touch</h2>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Subject" />
        </div>
        <div className="form-row full-width">
          <textarea placeholder="Write your message here..."></textarea>
        </div>
        <div className="form-row full-width">
          <button type="submit">SUBMIT NOW</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
