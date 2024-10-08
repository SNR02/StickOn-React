import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "../../assets/SO_Main.png"

export default function ContactNav() {
  const navigate = useNavigate();  // Initialize the navigate function

  return (
    <div className="contact-nav"> 
      <div className="contact-navbar">
        <img src={Logo} alt="logo" className="contact-logo" loading='eager'/>
        <a onClick={() => navigate(-1)} className="back-to-home">
          <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back to Home
        </a>
      </div>
    </div>
  )
}
