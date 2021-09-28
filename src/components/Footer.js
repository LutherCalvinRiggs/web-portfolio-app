import React, { Component } from 'react';
// import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="info-box">
          <div id="info-tech-block">
            <p id="email">luther.c.riggs@gmail.com</p>
            <p id="base-location">New York, NY</p>
            <p id="tech-list">Website built with React.</p>
          </div>
        </div>
        <ul id="footer-link-list">
          <li className="footer-link-li">
            <a className="footer-link" 
            href="https://www.linkedin.com/in/lcriggs"
            target="_blank"
            rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="footer-link-li">
            <a className="footer-link" 
            href="https://github.com/LutherCalvinRiggs"
            target="_blank"
            rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="footer-link-li">
            <a className="footer-link" 
              href="https://twitter.com/LutherCalRiggs"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="footer-link-li">
            <a className="footer-link" 
            href="https://www.instagram.com/luthercalvinriggs/"
            target="_blank"
            rel="noreferrer"
            >
             Instagram
            </a>
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer