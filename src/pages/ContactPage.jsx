import React from 'react'
import ContactNav from '../components/Contact/ContactNav'
import '../styles/contact.css'
import ContactForm from '../components/Contact/ContactForm'
import ContactCards from '../components/Contact/ContactCards'

export default function Contact() {
  return (
    <>
      <ContactNav />
      <div className="contact-page-container">
        <ContactForm />
        <ContactCards />
      </div>
    </>
  )
}
