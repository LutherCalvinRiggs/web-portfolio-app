import React from 'react';
import '../css/Home.css';


const Home = () => {
  return (
    <div id="landing-page">
      <NameBlock />
      <HeadShot />
    </div>
  )
}

  const NameBlock = () => {
    return (
      <main className="jumbotron">
        <a href="https://www.linkedin.com/in/lcriggs" target="_blank" rel="noreferrer">
          <div id="name-block">
            <h1 id="first-name">LUTHER</h1>
            <h1 id="middle-name">CALVIN</h1>
            <h1 id="last-name">RIGGS</h1>
            <h2 id="job-title">Frontend Web Developer</h2>
          </div>
        </a>
      </main>
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