import React from 'react'
import HeroLogo from "../../assets/Hero.webp"

export default function Hero() {
  return (
    <section className="home" id="home" data-aos="fade-in">
        <div className="home-page">
            <div className="home-left">
                <p className="main-content" data-i18n-key="app-header">
                    Empowering businesses by delivering world-class solutions.
                </p>
                <p className="main-subtext" data-i18n-key="app-desc">We help organisations thrive, by building innovative & bespoke software solutions.
                </p>
                <a href="contact.html" data-i18n-key="find-more">
                    <button className="home-btn">Find Out More</button>
                </a>
            </div>
            <div className="home-right">
                <img src={HeroLogo} alt="hero" loading='eager'/>
            </div>
        </div>
    </section>
  )
}
