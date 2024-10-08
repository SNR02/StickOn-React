import React from 'react'
import AboutUsLogo from "../../assets/about-us.png"
import GreenTick from "../../assets/GreenTick.png"
import RedTick from "../../assets/RedTick.png"

export default function AboutUs() {
  return (
    <section className="about" id="about">
        <div className="about-page">
            <div className="about-image">
                <img src={AboutUsLogo} alt="about image" loading='lazy'/>
            </div>
            <div className="about-content" data-aos="fade-right">
                <span className="sec-name" data-i18n-key="about-us">About Us</span>
                <h2 className="sec-heading" data-i18n-key="section-header2">Stickon Technologies: Innovating for a Better Tomorrow</h2>
                <p data-i18n-key="about-desc">At Stickon Technologies, we create affordable solutions to real-world problems, bridging innovative technology with practical applications. Our skilled team excels across diverse domains, driving positive change and delivering sustainable value. Committed to excellence, we develop robust software, enhance business processes, and offer expert consultancy. Join us to achieve your goals with our reliable and innovative solutions.</p>
                <div className="checks">
                    <div className="check">
                        <div className="check-logo">
                            <img src={GreenTick} alt="Check"/>
                        </div>
                        <div className="check-content">
                            <h3 data-i18n-key="cc-h1">Let's Make Your Place Better</h3>
                            <p data-i18n-key="cc-p1">At Stickon Technologies, we're dedicated to transforming spaces with innovative solutions. Our expertise ensures every project enhances functionality and aesthetics, providing real value.</p>
                        </div>
                    </div>
                    <div className="check">
                        <div className="check-logo">
                            <img src={RedTick} alt="Check"/>
                        </div>
                        <div className="check-content">
                            <h3 data-i18n-key="cc-h2">Make Your Intelligent Choice Today</h3>
                            <p data-i18n-key="cc-p2">
                                Choose Stickon Technologies for smart, effective solutions. Our diverse domain expertise guarantees tailored, cutting-edge approaches to meet your unique needs and drive your success. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
