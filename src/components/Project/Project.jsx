import { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom'

import '../../styles/project.css';

import projectsData from "../../Data/projectsData";


export default function Project() {

  let {projectName} = useParams();
  const [projectIdx, setProjectIdx] = useState(0);

  const videoRef = useRef();

  useEffect(()=>{
    projectsData.forEach((item,idx) => {
      if(projectName.toLowerCase() == item.title.toLowerCase()){
        setProjectIdx(idx);
        videoRef.current?.load();
        return;
      }
    })
  },[projectName])
  


  const [popup, setPopup] = useState({
    isOpen: false,
    currentImageIndex: 0,
  });

  const screenshots = [ ...projectsData[projectIdx].screenshots]
  

  // Effect to manage body scroll when popup is open
  useEffect(() => {
    if (popup.isOpen) {
      document.body.style.overflow = 'hidden';  // Disable scrolling
    } else {
      document.body.style.overflow = 'auto';    // Re-enable scrolling
    }
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [popup.isOpen]);

  const openPopup = (index) => {
    setPopup({ isOpen: true, currentImageIndex: index });
  };

  const closePopup = () => {
    setPopup({ isOpen: false });
  };

  const prevImage = () => {
    setPopup((prevState) => ({
      ...prevState,
      currentImageIndex:
        prevState.currentImageIndex === 0
          ? screenshots.length - 1
          : prevState.currentImageIndex - 1,
    }));
  };

  const nextImage = () => {
    setPopup((prevState) => ({
      ...prevState,
      currentImageIndex:
        prevState.currentImageIndex === screenshots.length - 1
          ? 0
          : prevState.currentImageIndex + 1,
    }));
  };

  return (
    <section className="project-page-container" id="project-top">
        <div className="project-page-content">
          {/* Project Header */}
          <div className="project-header">
              <img src={projectsData[projectIdx].coverImg} alt="Project Cover" />
          </div>

          {/* Project Description */}
          <div className="project-description">
              <h1>Challenge</h1>
              <p>{projectsData[projectIdx].challenge.split('\n').map((line,index) => (
                <span key={index}>{line}<br/></span>
              ))}</p>
          </div>

          <div className="project-description">
              <h1>Solution</h1>
              <p>{projectsData[projectIdx].solution.split('\n').map((line,index) => (
                <span key={index}>{line}<br/><br/></span>
              ))}</p>
          </div>

          <div className="project-description">
            <h1>Features Implemented</h1>
            <p>
              {projectsData[projectIdx].featuresImplemented.split('\n').map((feature, index) => {
                // Split each feature into subheading and description at the first occurrence of ':'
                const [subheading, description] = feature.split(':');

                return (
                  <span key={index}>
                    <strong>{subheading}:</strong>
                    {description && description}
                    <br /><br/>
                  </span>
                );
              })}
            </p>
          </div>



          <div className="project-description">
              <h1>Results</h1>
              <p>{projectsData[projectIdx].results.split('\n').map((line,index) => (
                <span key={index}>{line}<br/><br/></span>
              ))}</p>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack-list">
              <h2>Tech Stack</h2>
              <ul>
                {projectsData[projectIdx].techStack.map( (ts,idx) => (
                  <li key={idx}>{ts}</li>
                ))}
              </ul>
          </div>

          {/* Screenshots Section */}
          <div className="screenshots">
              <h2>Screenshots</h2>
              <div className="screenshots-grid">
              {screenshots.map((src, index) => (
                  <img
                  key={index}
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  onClick={() => openPopup(index)}
                  />
              ))}
              </div>
          </div>

          {/* Popup for screenshots */}
          {popup.isOpen && (
              <div className="popup">
              <div className="popup-content">
                  <img src={screenshots[popup.currentImageIndex]} alt="Screenshot" />
                  <button type="button" className="close-btn" onClick={closePopup}>
                  &times;
                  </button>
                  <button type="button" className="prev-btn" onClick={prevImage}>
                  &larr;
                  </button>
                  <button type="button" className="next-btn" onClick={nextImage}>
                  &rarr;
                  </button>
              </div>
              </div>
          )}

          {/* Walkthrough Section */}
          {projectsData[projectIdx].videoLink && 
          <div className="walkthrough">
            <h2>Application Walkthrough</h2>
            <video ref={videoRef}>
            <source
                src={projectsData[projectIdx].videoLink || ''}
                autoFocus="off"
            />
            Your browser does not support the video tag.
            </video>
          </div>}
        

          {/* Live Link Section */}
          { projectsData[projectIdx].liveLink && <div className="live-link">
              <a href={projectsData[projectIdx].liveLink} target="_blank" rel="noreferrer" key={projectsData[projectIdx].liveLink}>
              View Live Project
              </a>
          </div> }
        </div>
    </section>
  );
}
