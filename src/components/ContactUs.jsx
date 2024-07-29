import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually handle form submission, e.g., send formData to an API or server.
    console.log('Form Data Submitted:', formData);
    alert('Thank you for your message!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    
    <div className='contact-container'>
      <div class="fading-border"></div>
      <h1 className='contact-title'>Contact Us</h1>
      <h2 className='contact-subheader'>Get a FREE Quote!</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor='phone'>Phone</label>
        <input
          type='text'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          rows='5'
          required
        ></textarea>

        <button type='submit' className='submit-button'>Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
