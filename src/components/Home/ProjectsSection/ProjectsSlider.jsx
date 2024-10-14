import React, { useEffect } from 'react'
import ContentGeneratorLogo from '../../../assets/projects-assets/content-generator.png'
import OneShopLogo from '../../../assets/projects-assets/oneshop.png'
import VDALogo from '../../../assets/projects-assets/vda.png'
import VidConnectLogo from '../../../assets/projects-assets/vidconnect.png'
import WebTalkLogo from '../../../assets/projects-assets/web-talk.png'
import ProjectItem from './ProjectItem'

export default function Projects() {
    let projectsData = [
        {name:"Content Generator", logo:ContentGeneratorLogo, description:"A web app that uses AI to generate text and images based on user prompts.", h3Key:"ph2", pKey:"pp2"},
        {name:"OneShop", logo:OneShopLogo, description:"A platform where users can search for products, view legit reviews, and compare prices.", h3Key:"ph1", pKey:"pp1"},
        {name:"Virtual Document Assistant", logo:VDALogo, description:"Virtual Document Assistant is an application where you can upload files and chat with your applications.", h3Key:"ph3", pKey:"pp3"},
        {name:"WebTalk", logo:WebTalkLogo, description:"A web-based video conferencing application that allows users to join rooms, participate in video calls, raise hands, send chat messages, share screens, and more.", h3Key:"ph4", pKey:"pp4"},
        {name:"VidConnect", logo:VidConnectLogo, description:"Real-time web chat app with integrated video conferencing using VideoSDK.", h3Key:"ph5", pKey:"pp5"}
    ]
    useEffect(() => {
      // Initialize the Owl Carousel when component is mounted
      $(".owl-carousel").owlCarousel({
        loop:true,
      margin:60,
      nav:true,
    //   autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      mouseDrag:false,
      freeDrag:false,
      pullDrag:false,
      touchDrag:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
    });
    }, []);
  return (
    <section className='projects' id="projects">
      <div className="container-fluid">
        <h1 className="projects-heading" data-i18n-key="our-projects">Our Projects</h1>
        <div className="slider">
          <div className="owl-carousel">
            {projectsData.map((project, index)=> (
              <ProjectItem 
              key={index} 
              name={project.name} 
              logo={project.logo} 
              description={project.description}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
