import React from 'react'
import { useNavigate } from "react-router-dom";

export default function ProjectItem({name, logo, description, h3Key, pKey}) {

  const navigate = useNavigate()
  let handleProjectCardClick = () => {
    navigate(`/project/${name}`);
  }
  return (
    <div className='slider-card' onClick={handleProjectCardClick}>
      <div className="d-flex justify-content-center align-items-center">
        <img src={logo} alt={name} loading='lazy'/>
      </div>
      <div className="project-info">
        <h3 data-i18n-key={h3Key}>{name}</h3>
        <p data-i18n-key={pKey}>{description}</p>
      </div>
    </div>
  )
}
