import React from 'react'
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

const Header = ({profileImg}) => {
  return (
    <div className='container'>
        <header className='header'>
            <img className='tag' width={60} height={60} src={profileImg} alt="" />
            <nav className='navigation'>
                <a className='info-links' href="https://wa.me/0554373790" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={20} color="green" /> Contact
                </a>
                <a className='info-links' href="https://github.com/youngtalent18" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} color="white" /> Github
                </a>
                <a className='info-links' href="https://linkedin.com/in/stephen-anti" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} color="blue" /> LinkedIn
                </a>
            </nav>
        </header>
    </div>
  )
}

export default Header