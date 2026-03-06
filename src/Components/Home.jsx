import React from 'react'
import profileImg from "../assets/favicon.ico"
import { motion } from 'framer-motion'
import { Code2Icon, DatabaseIcon, Globe, HandshakeIcon, Settings, Smartphone, UserCircle } from 'lucide-react'

const Home = () => {
  return (
    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className='home-container'>
        <section className='hero'> 
        <motion.span initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.4}} className='inspo'> <Code2Icon size={15}/> creating to evolve</motion.span>
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.7}} className='hero-content'>
          <h1>I am a Computer <br/>Science Student</h1>
          <p>and a self teaching learner aspiring to become 
            a Software Engineer.<br/> With tools like ChatGPt, Gemini, <br/> 
            helping me to understand the logic.
          </p>
        </motion.div>
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.9}} className='btns'>
          <a className='btn'> <HandshakeIcon color='orange' size={18}/> Hire Me</a>
        </motion.div>
        <img className='hero-img' src={profileImg} alt="" />
      </section>
      <section className='features'>
        <div className='mobile-apps'>
          <Smartphone color='red' size={20}/>
          <div className='message'>
            <span>Mobile Apps</span>
            <span>Designing cross-platform mobile apps</span>
          </div>
        </div>
        <div className='mobile-apps'>
          <Settings color='gray' size={20}/>
          <div className='message'>
            <span>Backend</span>
            <span>Developing scalable APIs and server logic</span>
          </div>
        </div>
        <div className='mobile-apps'>
          <DatabaseIcon size={20}/>
          <div className='message'>
            <span>DataBase</span>
            <span>Designing and managing structured data</span>
          </div>
        </div>
        <div className='mobile-apps'>
          <Globe color='blue' size={20}/>
          <div className='message'>
            <span>WEB Development</span>
            <span>Building modern and responsive websites</span>
          </div>
        </div>
      </section>
    </motion.div>
    
  )
}

export default Home