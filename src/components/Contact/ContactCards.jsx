import React from 'react'

export default function ContactCards() {
  return (
    <div className="container-right" data-aos="fade-in">
        <h3>Other ways to get in touch with us!</h3>
        <div className="contact-card">
            <h4>Project Request</h4>
            <p>Mail us your project requirement and get the free quote</p>
            <span className="mail">
            <a href="mailto:haribabup@stickon.tech">
                <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;haribabup@stickon.tech</a><br/>
            <a href="mailto:gayaz.shaik@stickon.tech">
                <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;ghayaz.shaik@stickon.tech</a>
            </span>
            <br/><br/>
            <span className="mobno"><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;+91-99636 22496</span>
        </div>
        <div className="contact-card">
            <h4>Apply for Job</h4>
            <p>We're looking for problem solvers. Come and join our team</p>
            <span className="mail">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMSqVrkPCWBqjzQPcmtcqJLwLdGSWGQGNBVmmHhVZGCnchfvWBZslBvnKkclWVjHBvLsbCP">
                <i className="fa-solid fa-envelope"></i>&nbsp;&nbsp;venkatesh.p@stickon.tech
            </a>
            </span>
            <br/><br/>
            <span className="mobno"><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;+91-89780 61097</span>
        </div>
        <div className="contact-card">
            <h4>Further Queries</h4>
            <p>Let's have a chat! Call us at</p>
            <span className="mobno"><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;+91-9052530123</span>
            <br/><br/>
            <span className="mobno"><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;+91-89780 61097</span>
        </div>
    </div>

  )
}
