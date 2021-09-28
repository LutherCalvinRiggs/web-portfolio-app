import React from 'react';
// import '../css/Header.css';
// import '../css/ADA.css';
import SkipToMainContent from './ADA/SkipToMainContent.js';

  const LogoImage = () => {
    return (
      <a href="/index.html" className="logo-image-link" aria-label="Return to Home Page">
        <img 
          className="logo-image"
          src="./images/logo-black-text.png"
          alt="Luther Calvin Riggs logo">
        </img>
      </a>
    )
  }

  const NavLink = (props) => {
    return (
      <p
        id={props.buttonName}
        className="nav-button"
        onClick={(e) => props.clickAction(e)}
        aria-label={props.ariaLabel}
        tabIndex="0"
      >{props.buttonText}
      </p>
    )
  }

  const NavLinkList = (props) => {
    return (
      <div id="nav-button-list">
        <NavLink 
          buttonName="portfolio-button"
          buttonText="Portfolio"
          ariaLabel="View Luther's portfolio"
          clickAction={(e) => {
            props.updateContent("portfolio")
            props.clearActiveTab()
            props.activateTab(e)
          }}
        />
        <NavLink 
          buttonName="resume-button"
          buttonText="Resume"
          ariaLabel="View Luther's resume"
          clickAction={(e) => {
            props.updateContent("resume")
            props.clearActiveTab()
            props.activateTab(e)
          }}
        />
      </div>
    )
  }

const Header = (props) => {
  return (
    <header>
      <nav>
        <LogoImage />
        <NavLinkList 
          updateContent={props.updateContent}
          clearActiveTab={clearActiveTab}
          activateTab={activateTab}
        />
      </nav>
    </header>
  )
}

  function clearActiveTab() {
    const currentActiveTab = document.querySelector('.active')
    if (currentActiveTab !== null) {
      currentActiveTab.classList.remove('active')
    }
  }
  
  function activateTab(e) {
    const clickedTab = e.target
    clickedTab.classList.add('active')
  }

export default Header