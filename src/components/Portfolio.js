import React from 'react';
import { portfolioProjectArray } from './portfolioProjectArray.js';
import Footer from './Footer.js';
// import '../css/Portfolio.css';
 

const Portfolio = () => {
  return (
    <main id="project-portfolio">

      {portfolioProjectArray.map(project => (
        <article 
          key={project.id} 
          className="project-block"
        >
          <Image 
            imgSrc={project.imgSrc}
            imgAltText={project.name}
            link={project.htmlLink}
          />
          <ProjectInfo 
            title={project.name}
            description={project.description}
            techStack={project.techStack}
            link={project.htmlLink}
          />
        </article>
      ))}
      <Footer />

    </main>
  )
}

  const Image = (props) => {
    return (
      <div className="project-image-block">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img 
            className="project-preview-image"
            src={props.imgSrc}
            alt={props.imgAltText}>
          </img>
        </a>
      </div>
    )
  }

  const ProjectInfo = (props) => {
    return (
      <section className="project-info-block">
        <ProjectTitle 
          title={props.title}
        />
        <ProjectDescription 
          description={props.description}
        />
        <ProjectTechStack 
          techStack={props.techStack}
        />
        <ProjectLink 
          link={props.link}
        />
      </section>
    )
  }

    const ProjectTitle = (props) => {
      return (
        <h2 className="project-title">
          {props.title}
        </h2>
      )
    }
    
    const ProjectDescription = (props) => {
      return (
        <p className="project-description">
          {props.description}
        </p>
      )
    }
    
    const ProjectTechStack = (props) => {
      return (
        <p className="project-tech-stack">
          <span className="tech-stack-label">
            Tech Stack: </span>
          {props.techStack}
        </p>
      )
    }

    const ProjectLink = (props) => {
      return (
        <a 
          className="project-link" 
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          View Project
          {/* Need to add font-awesome icon of arrow pointing out of a box */}
        </a>
      )
    }

    


export default Portfolio