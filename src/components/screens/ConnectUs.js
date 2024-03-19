import React, { useState } from 'react';
import "../screens-css/ConnectUs.css";

const ConnectUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן נוסיף את הלוגיקה לשליחת הפנייה - כמו אולי שליחת דיוור או פנייה לשרת
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // והודעת התודה או כל הודעה אחרת על שליחת הפנייה
    alert('Your message has been sent successfully!');
    // לאחר שליחת הפנייה, נאפס את השדות
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
     
    <div className="connect-us-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to contact us using the information below:</p>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Address:</h2>
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="contact-item">
          <h2>Email:</h2>
          <p>info@example.com</p>
        </div>
        <div className="contact-item">
          <h2>Phone:</h2>
          <p>+123 456 7890</p>
        </div>
      </div>
      <h2>Send us a message:</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ConnectUs;