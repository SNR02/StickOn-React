import React, { useState } from 'react';
import CleberateImg from '../../assets/celebrate.png';
import ContactImg1 from '../../assets/Contact-img1.webp';
import ContactImg2 from '../../assets/Contact-img2.webp';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(import.meta.env.VITE_SERVER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone_number: '',
          message: '',
        });
      }
      else {
        if (response.status === 429) {
          setStatus('too_many_requests');
        } else {
          setStatus('error');
        }
      }
      setTimeout(() => {
        setStatus(null);
      }, 5000);

    } 
    
    catch (error) {
      setStatus('error');
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="c1 contact-item">
            <div className="c1-tag" data-aos="zoom-out">
              <div className="tag-text" data-i18n-key="contact-tag">Building Digital Excellence</div>
            </div>
            <h2 data-i18n-key="section-header4">
              Plugging great <span className="text-color-crimson">Ideas</span> into your brand!
              <span style={{ marginLeft: '0.5rem' }}>
                <img src={CleberateImg} alt="celebrate" />
              </span>
            </h2>
            <p data-i18n-key="contact-para">
              Transforming your brand with innovative ideas, Effortlessly integrating creativity into your identity.
            </p>
          </div>

          <div className="c2">
            <div className="form-container">
              <form id="contactForm" name="contactForm" className="contactForm" onSubmit={handleSubmit}>
                <input type="hidden" name="formType" value="Contact Form" />
                <input
                  className="contact-input"
                  maxLength="256"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  data-i18n-key="full-name-placeholder"
                />
                <input
                  className="contact-input"
                  maxLength="256"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  id="Email-6"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  data-i18n="your-email-placeholder"
                />
                <input
                  className="contact-input"
                  maxLength="256"
                  name="phone_number"
                  placeholder="Your Phone"
                  type="tel"
                  id="Phone-number"
                  required
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  data-i18n="your-phone-placeholder"
                />
                <textarea
                  id="Message"
                  name="message"
                  maxLength="5000"
                  placeholder="Your Message"
                  className="contact-input"
                  data-i18n="your-message-placeholder"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="submitBtn"
                  value="Send Message"
                  data-aos="zoom-in"
                  data-i18n-key="contact-form-submit"
                />
              </form>

              {status === 'success' && (
                <div className="form-success" tabIndex="-1" role="region">
                  <div data-i18n-key="contact-form-success">
                    Thank you! Your submission has been received!
                  </div>
                </div>
              )}
              {status === 'too_many_requests' && (
                <div className="form-fail" tabIndex="-1" role="region">
                  <div data-i18n-key="contact-form-failure">
                    Too many requests...
                  </div>
                </div>
              )}
              {status === 'error' && (
                <div className="form-fail" tabIndex="-1" role="region">
                  <div data-i18n-key="contact-form-failure">
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              )}
            </div>
            <img
              src={ContactImg1}
              loading="lazy"
              alt="a pink and blue half circle on a black background"
              className="form-background1"
            />
            <img
              src={ContactImg2}
              loading="lazy"
              alt="a black background with blue polka dots"
              className="form-background2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
