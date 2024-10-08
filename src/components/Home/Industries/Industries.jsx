import React from 'react'
import IndustryCard from './IndustryCard'

import EducationLogo from '../../../assets/Industries/education.png'
import HealthCareLogo from '../../../assets/Industries/health-care.png'
import EcommerceLogo from '../../../assets/Industries/e-commerce.png'
import RetailLogo from '../../../assets/Industries/retail.png'
import FinanceLogo from '../../../assets/Industries/finance.png'
import HospitalityLogo from '../../../assets/Industries/hospitality.png'

export default function Industries() {

  let industriesData = [
    { 
      logo:EducationLogo,
      title:'Education',
      description:'We deliver digital transformation in education through technology that enhances learning, management, and collaboration.',
      keySolutions : ['Student Portals','Online Exams', 'CRM for Institutions']
    },
    { 
      logo:HealthCareLogo,
      title : 'Healthcare',
      description:'Providing healthcare solutions that enable better patient care, data management, and operational efficiency.',
      keySolutions : ['Appointment Systems','Medical CRM','Telemedicine Platforms']
    },
    {
      logo:EcommerceLogo,
      title:'E-Commerce',
      description:'Helping online businesses thrive through powerful, scalable e-commerce solutions.',
      keySolutions:['Shopping Carts','Inventory Management','Payment Gateways']
    },
    {
      logo:RetailLogo,
      title: "Retail",
      description: "Creating solutions that help retailers manage inventory, customer engagement, and streamline operations.",
      keySolutions: ["POS Systems", "Inventory Tracking", "Customer Loyalty Programs"]
    },
    {
      logo:FinanceLogo,
      title: "Finance",
      description: "Delivering secure and efficient financial technology solutions that streamline operations and improve customer experiences.",
      keySolutions: ["Banking Apps", "Loan Management Systems", "Payment Processors"]
    },
    {
      logo:HospitalityLogo,
      title: "Hospitality",
      description: "Delivering technology solutions that improve guest experiences, streamline operations, and enhance customer management.",
      keySolutions: ["Booking Systems", "Guest Management", "Loyalty Programs"]
    }
  ]
  return (
    <section className="industries">
        <h2>Industries We Serve</h2>
        <p>With a wide range of services and proven experience across major industries, we understand your challenges and deliver tailored solutions that overcome them and drive meaningful impact.</p>
        <div className="industry-cards-container">

          {industriesData.map((card, index) => (
            <IndustryCard 
             key={index}
             logo={card.logo}
             title={card.title} 
             description={card.description} 
             keySolutions={card.keySolutions}
            />
          ))}
        </div>
      </section>
  )
}
