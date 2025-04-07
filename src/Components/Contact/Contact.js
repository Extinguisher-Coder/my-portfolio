import React, { useState } from 'react';
import './Contact.css';
import messageIcon from '../Assets/images/msg-icon.png';
import mailIcon from '../Assets/images/mail-icon.png';
import phoneIcon from '../Assets/images/phone-icon.png';
import locationIcon from '../Assets/images/location-icon.png';
import whiteArrow from '../Assets/images/white-arrow.png';

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "561e4470-d8af-4ff0-8d04-c43415991f34");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Thanks for your message. I will get back to you soon.");
        event.target.reset();
        alert("Message Sent Successfully!");
      } else {
        setResult("Failed to send message. Please try again.");
        alert("Failed to send message!");
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
      alert("Error: Unable to send message.");
    }
    setLoading(false);
  };

  return (
    <div className='contact-container'>
      <div className='contact-details'>
        <h1>GET IN TOUCH WITH ME</h1>
        <h3>
          Send me a message <img src={messageIcon} alt="Message Icon" className="message-icon" />
        </h3>
        <p>You can reach out to me through the contact form or find my contact information below. I'll get back to you shortly. Thank you!</p>
        <ul>
          <li><img src={mailIcon} alt="Mail Icon" /> davidodumgya68@gmail.com</li>
          <li><img src={phoneIcon} alt="Phone Icon" /> +233 24 055 0824</li>
          <li><img src={locationIcon} alt="Location Icon" /> Agona Nkwanta, Ahanta West, Western Region, Ghana</li>
        </ul>
      </div>

      <div className='contact-form'>
        <form onSubmit={onSubmit}>
          <label>Your Full Name</label>
          <input type='text' name='name' placeholder='Enter your full name' required />
          
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your phone number' required />
          
          <label>Write your message here</label>
          <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>

          <button type='submit' className='submit-btn'>
            Send Message <img src={whiteArrow} alt="Send Arrow" />
          </button>
          
          {loading && (
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          )}
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
