import React from 'react'
import SOMainLogo from '../../assets/SO_Main.png' 
import { Link } from 'react-router-dom'
import LocationImg from '../../assets/footer/locationImg.png'
import MailImg from '../../assets/footer/mailImg.png'
import TelephoneImg from '../../assets/footer/TelephoneImg.png'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
          <div className="fc1 fc">
              <img src={SOMainLogo} alt="" loading='lazy'/>
              <p data-i18n-key="footer-para">Bring your ideas to life with our expert team—innovative solutions, dedicated support, and a vision turned into reality.</p>
              <Link to="/contact" className="quote-btn2" data-i18n-key="get-started">Get Started&nbsp;&nbsp;
              <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <div className="fc2 fc">
              <p data-i18n-key="quick-links" className='fc-subhead'>Quick Links</p>
              <ul>
                  <li><a href="#home" data-i18n-key="home">Home</a></li>
                  <li><a href="#about" data-i18n-key="about">About</a></li>
                  <li><a href="#blogs" data-i18n-key="projects">Projects</a></li>
                  <li><a href="#contact" data-i18n-key="contact">Contact</a></li>
                  <li><a href="#visit" data-i18n-key="visit-us">Visit Us</a></li>
              </ul>
          </div>
          <div className="fc3 fc">
            <p className='fc-subhead'>Have a Question?</p>
            <div className="contact-details">
                <a href="mailto:haribabup@stickon.tech" className="contact-info">
                  <img src={MailImg} alt="" loading='lazy'/>
                  <span>haribabup@stickon.tech</span>
                </a>
                <a href="tel:9963622496" className="contact-info">
                  <img src={TelephoneImg} alt="" loading='lazy'/>
                  <span>+91 - 99636 22496</span>
                </a>
                <a href="https://maps.app.goo.gl/hLmDFU1ZtBkaCtwv9" target="_blank" className="contact-info">
                  <img src={LocationImg} alt="" loading='lazy'/>
                  <span>3rd Floor, Eden ECCO Greens,
                    Karakambadi Rd, Madhav Puram,
                    Tirupati, Andhra Pradesh 517507
                  </span>
                </a>
            </div>
          </div>
      </div>
  </footer>
  )
}
