import { Mail, Phone, UserCircle } from 'lucide-react'
import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-content'>
            <div className='info1'>
              <div className='footer-logo'>
                <UserCircle size={28}/>
                <span className='footer-tag'>Codecraze</span>
              </div>
              <p>I am a Computer Science<br />student and a self teaching learner <br /> aspiring to become <br /> a Software Engineer. <br /> I use tools like ChatGPT <br /> to teach myself. <br />I create to solve | I create to evolve</p>
            </div>
            <div className='info2'>
              <span>My Social</span>
              <a className='info-links' target="_blank" rel="noopener noreferrer" href='https://github.com/youngtalent18'><FaGithub size={20}/> Github</a>
              <a className='info-links' target="_blank" rel="noopener noreferrer" href='https://wa.me/233554373790?text=Hello%20Codecraze%2C%20I%20need%20a%20website' ><FaWhatsapp size={20} color='green'/> WhatsApp</a>
              <a className='info-links' target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/stephen-anti-88751b3b2?trk=contact-info' ><FaLinkedin size={20} color='blue'/> LinkedIn</a>
            </div>
            <div className='info3'>
              <span>Services</span>
              <p>Mini Websites </p>
              <p>Code cleanups</p>
              <p>Web designing</p>
              <p>Landing Pages</p>
            </div>
            <div className='info4'>
              <span>Quick Access</span>
              <p><Phone size={20}/>+233 554373790</p>
              <p><Mail size={20}/>stephenanti63@gmail.com</p>
            </div>
        </div>
        <hr />
        <div className='footer-message'>
          <div className='right'>
            © 2026 Codecraze. All rights reserved.
          </div>
          <div className='team-message'>
            Built with love 💖 by Stephen {"(Codecraze)"}
          </div>
        </div>
      </footer>
  )
}

export default Footer