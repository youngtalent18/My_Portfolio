import React from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import Jumia from "../assets/hero.png"
import Twitter from "../assets/twitter.png"
import Image from "../assets/store.png"

const Projects = () => {
  const projects = [
    { 
      social: "",
      color: "green",
      title: "FullStack E-commerce Store",
      description: "This store was built with the MERN stack, it has authentication and authorization features, jwt tokens, and a user-friendly interface.",
      image: Image,
      link: 'https://github.com/youngtalent18/Mini-Ecommerce-with-Authentication',
      icon: <FaGithub/>,
      live: ""
    },
    { 
      social: "",
      color: "orange",
      title: "Jumia-Mini",
      description: "A second year project as CS student, this store was built with HTML, CSS and JS, no real backend",
      image: Jumia,
      link: 'https://github.com/youngtalent18/Jumia-Mini',
      icon: <FaGithub/>,
      live: "example.com"
    },
    { 
      social: <FaTwitter />,
      color: "blue",
      title: "Twitter Clone",
      description: "A Twitter clone built with React, Node.js, express and MongoDB, cloudinary for image uploads, friendly user-interface",
      image: Twitter,
      link: 'https://github.com/youngtalent18/twitter-clone',
      icon: <FaGithub/>,
      live: ""
    },
    
  ]
  return (
    <div className='projects'>
      <h3>Friendly Projects</h3>
      <div className='projects-container'>
        {
          projects.map((project,index)=>{
            return (
              <div className='project-details' key={index}>
                <img className='pro-img' src={`${project.image}`} alt={project.title} />
                <div className='project-info'>
                  <span className={`${project.color}`}> {project.title} {project.social}</span>
                  <p>{project.description}</p>
                </div>
                <div className='pro-links'>
                  <a href={project.link}>
                  {project.icon}
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                )}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects