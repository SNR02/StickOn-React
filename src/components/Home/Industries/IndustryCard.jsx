import React from 'react'

export default function IndustryCard({logo, title, description, keySolutions}) {
  return (
    <div className="industry-card">
    <div className="industry-card-title-container">
      <span><img src={logo} alt={title} loading='lazy'/></span>
      <h3>{title}</h3>
    </div>
    
    <p>{description}</p>
    <h4>Key Solutions:</h4>
    <ul>
      {keySolutions.map((item,index) => (
        <li key={index}><i className="fas fa-check"></i>{item}</li>
      ))}
    </ul>
  </div>
  )
}
