import React from 'react'
import BlueBorder from '../../assets/choose-us/BlueBorder.webp'
import GreenBorder from '../../assets/choose-us/GreenBorder.webp'
import PurpleBorder from '../../assets/choose-us/PurpleBorder.webp'

export default function ChooseUs() {
  return (
    <section className="choose-us">
        <div className="choose-us-container">
            <div className="cu-s1" data-aos="fade-up">
                <span data-i18n-key="choose-us-header">Why You Should</span>&nbsp;
                <span className="tag" data-i18n-key="cu-tag">Choose Us?</span>
            </div>
            <div className="cu-s2" data-aos="fade-up" data-aos-delay="200">
                <h2 data-i18n-key="section-header1">Experience reliability redefined with StickOn.</h2>
            </div>
            <div className="cu-s3">
                <div className="cu-s3-card">
                    <div className="image-block" data-aos="fade-in">
                        <div style={{backgroundColor: "rgb(255, 129, 57)"}} className="image-block-inner">
                             <i className="fa-solid fa-users"></i>
                        </div>
                        <img src={BlueBorder} style={{width: "100%", opacity: 1, height: "2px"}} width="130" height="2" alt="Icon" className="card-border" data-aos="fade-right" data-aos-delay="100" />
                    </div>
                    <div className="text-block" data-i18n-key="cu-tb1">Contact Us</div>
                    <p data-i18n-key="cu-p1">Get in touch for inquiries and support.</p>
                </div>
                <div className="cu-s3-card">
                    <div className="image-block" data-aos="fade-in" data-aos-delay="200">
                        <div style={{backgroundColor: "rgb(60, 142, 238)"}} className="image-block-inner">
                             <i className="fa-solid fa-brain-circuit"></i>
                        </div>
                        <img src={GreenBorder} style={{width: "100%", opacity: 1, height: "2px"}} width="130" height="2" alt="Icon" className="card-border" data-aos="fade-right" data-aos-delay="300" />
                    </div>
                    <div className="text-block" data-i18n-key="cu-tb2">Brainstorming</div>
                    <p data-i18n-key="cu-p2">Innovative and creative ideas tailored for you.</p>
                </div>
                <div className="cu-s3-card">
                    <div className="image-block" data-aos="fade-in" data-aos-delay="400">
                        <div style={{backgroundColor: "rgb(25, 194, 22)"}} className="image-block-inner">
                             <i className="fa-solid fa-database"></i>
                        </div>
                        <img src={PurpleBorder} style={{width: "100%", opacity: 1, height: "2px"}} width="130" height="2" alt="Icon" className="card-border" data-aos="fade-right" data-aos-delay="500" />
                    </div>
                    <div className="text-block" data-i18n-key="cu-tb3">Find the Solution</div>
                    <p data-i18n-key="cu-p3">Practical solutions for your challenges.</p>
                </div>
                <div className="cu-s3-card">
                    <div className="image-block" data-aos="fade-in" data-aos-delay="600">
                        <div style={{backgroundColor: "rgb(185, 87, 220)"}} className="image-block-inner">
                            <i className="fa-solid fa-memo-circle-check"></i>
                        </div>
                    </div>
                    <div className="text-block" data-i18n-key="cu-tb4">Project Done</div>
                    <p data-i18n-key="cu-p4">Proven success in completed projects.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
