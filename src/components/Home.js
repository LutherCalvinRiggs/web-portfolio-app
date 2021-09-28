import React from 'react';
// import '../css/Home.css';
import Footer from './Footer.js';

const Home = () => {
  return (
    <>
      <main id="landing-page">
        <NameBlock />
        <HeadShot />
      </main>
      <Footer />
    </>
  )
}

  const NameBlock = () => {
    return (
      <section className="jumbotron">
        <a href="https://www.linkedin.com/in/lcriggs" target="_blank" rel="noreferrer">
          <div id="name-block">
            <h1 id="first-name">LUTHER</h1>
            <h1 id="middle-name">CALVIN</h1>
            <h1 id="last-name">RIGGS</h1>
            <h2 id="job-title">Frontend Web Developer</h2>
          </div>
        </a>
      </section>
    )
  }

  const HeadShot = () => {
    return (
      <div id="profile-image-block">
        <a href="https://www.linkedin.com/in/lcriggs" target="_blank" rel="noreferrer">
          <img 
            id="profile-image" 
            src="/images/profile-image4a.jpg" 
            alt="Profile"
          />
        </a>
      </div>
    )
  }

export default Home