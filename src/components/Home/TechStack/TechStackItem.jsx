import React from 'react'

export default function TechStackItem({logo, name}) {
  return (
    <div className="ts-card">
        <div className="ts-icon">
            <img src={logo} alt={name} loading='lazy'/>                 
        </div>
        <span>{name}</span>
    </div>
  )
}
