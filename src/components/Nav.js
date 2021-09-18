import React from 'react';
import '../css/Nav.css';

  const LogoImage = () => {
    return (
      <a href="/index">
        <img 
          className="logo-image"
          src="./images/logo-black-text.png"
          alt="Luther Calvin Riggs logo">
        </img>
      </a>
    )
  }

  const ContentButton = (props) => {
    return (
      <p
        id={props.buttonName}
        className="nav-button"
        onClick={(e) => props.clickAction(e)}
      >{props.buttonText}
      </p>
    )
  }

  const ButtonList = (props) => {
    return (
      <div id="nav-button-list">
        <ContentButton 
          buttonName="portfolio-button"
          buttonText="Portfolio"
          clickAction={(e) => {
            props.updateContent("portfolio")
            props.clearActiveTab()
            props.activateTab(e)
          }}
        />
        <ContentButton 
          buttonName="resume-button"
          buttonText="Resume"
          clickAction={(e) => {
            props.updateContent("resume")
            props.clearActiveTab()
            props.activateTab(e)
          }}
        />
      </div>
    )
  }

const Nav = (props) => {
  return (
    <nav>
      <LogoImage />
      <ButtonList 
        updateContent={props.updateContent}
        clearActiveTab={clearActiveTab}
        activateTab={activateTab}
      />
    </nav>
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

export default Nav