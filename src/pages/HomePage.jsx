import React, { useEffect } from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
import ChooseUs from '../components/Home/ChooseUs'
import AboutUs from '../components/Home/AboutUs'
import TechStack from '../components/Home/TechStack/TechStack'
import ProjectsSlider from '../components/Home/ProjectsSection/ProjectsSlider'
import ContactUs from '../components/Home/ContactUs'
import Subscribe from '../components/Home/Subscribe'
import Footer from '../components/Home/Footer'

import { createGlobalStyle } from 'styled-components';

import '../styles/index.css'
import Industries from '../components/Home/Industries/Industries'

const GlobalStyle = createGlobalStyle`
  *{
  font-family: Urbanist, sans-serif;
}

html{
  scroll-behavior: smooth;
}

html::-webkit-scrollbar{
  display: none;
}
body{
  overflow-x: hidden;
  /* background-color: #fff; */
}

img {
  vertical-align: middle;
  max-width: 100%;
  display: inline-block;
}

p {
  color: #4f4f4f;
  letter-spacing: -.01rem;
  margin-bottom: 10px;
  font-family: Urbanist, sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.875rem;
}
`;

export default function Home() {
  
  return (
    <>
    <GlobalStyle />
      <Navbar/>
      <Hero/>
      <ChooseUs />
      <AboutUs />
      <TechStack />
      <Industries />
      <ProjectsSlider />
      <ContactUs />
      <Subscribe />
      <Footer />
    </>
  )
}
