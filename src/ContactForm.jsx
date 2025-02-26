import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import BackToTopButton from './BackToTopButton';
import './stylle.css';

const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        access_key: '826dee18-1eb0-4d96-9b01-256cda75c086',  // Replace with your actual Web3Forms access key
        name: formData.name,
        email: formData.email,
        message: formData.message
      });

      if (response.data.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }

    setLoading(false);
  };

  return (
    <section id="contact">
      <h1 className="heading">Contact Me</h1>
      <div className="contact-wrapper">
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text phone">
                <a href="tel:7011818566" title="Give me a call">
                  +91-7011818566
                </a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text gmail">
                <a href="mailto:jouharparvez123@gmail.com" title="Send me an email">
                  jouharparvez123@gmail.com
                </a>
              </span>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
    <li>
      <a href="https://www.instagram.com/Jouhar" target="_blank" className="contact-icon" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/Jouhar123" target="_blank" className="contact-icon" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/Jouhar123" target="_blank" className="contact-icon" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
      </a>
    </li>
  </ul>
          <hr />
        </div>
        <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control Name"
                id="name"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control Mail"
                id="email"
                placeholder="E-Mail"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <textarea
            className="form-control1"
            rows="10"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
            <div className="alt-send-button">
              <FontAwesomeIcon icon={faPaperPlane} className='fa' />
              <span className="send-text">{loading ? 'Sending...' : 'SEND'}</span>
            </div>
          </button>
        </form>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;

