import {BookOpen, Brain, GraduationCapIcon, Info, Laptop2Icon, Map, Rocket } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section className='about'>
      <div className='left-side'>  
        <div className='description'>
          <h3><Info/> About Me</h3>
          I am a Computer Science student and a self teaching learner aspiring to become a Software Engineer. 
          I use tools like ChatGPT to teach myself, and to explain the logic to my understanding.
        </div>
        <div className='focus'>
          <h3>My Focus Area</h3>
          <div className='tips'>
            <span>Web Development</span>
            <span>Mobile App Development</span>
            <span>Backend Development</span>
            <span>Database Design & Management</span>
          </div>
        </div>
        <div className='facts'>
          <h3>Ouick Facts</h3>
          <div className='tips'>
            <span  className='tip'><GraduationCapIcon size={20} color='orange'/> Computer Science Student</span>
            <span className='tip'><Laptop2Icon size={20} color='blue'/> Developer</span>
            <span className='tip'><Rocket size={20} color="red"/>Building real projects</span>
            <span className='tip'><BookOpen size={20} color='green' /> Self Teaching Learner</span>
            <span className='tip'><Brain size={20} color='gray' /> Utilize Claude & ChatGPT</span>
          </div>
        </div>
      </div>
      <div className='roadmap'>
        <h3><Map/> My Roadmap</h3>
        <div className='timeline'>
          <div className="timeline-content">
            <div className='dot'></div>
            <div content='timeline-item'>Html, CSS, JS</div>
          </div>
          <div className="timeline-content">
            <div className='dot'></div>
            <div content='timeline-item'>Python </div>
          </div>
          <div className="timeline-content">
            <div className='dot'></div>
            <div content='timeline-item'>Git, GitHub</div>
          </div>
          <div className="timeline-content">
            <div className='dot current'></div>
            <div content='timeline-item'>React, MongoDB, NodeJs, Express {"(Current)"}</div>
          </div>
          <div className="timeline-content">
            <div className='dot '></div>
            <div content='timeline-item'>TailwindCSS</div>
          </div>
          <div className="timeline-content">
            <div className='dot'></div>
            <div content='timeline-item'>TypeScript, PostegreSQl</div>
          </div>
          <div className="timeline-content">
            <div className='dot'></div>
            <div content='timeline-item'>React Native</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About