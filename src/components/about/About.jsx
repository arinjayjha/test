import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { RiUser3Line } from 'react-icons/ri'
import { TiFolder } from "react-icons/ti"
import ME from '../../assets/avatar2.png'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Education</h5>
              <small>Vellore Institute of Technology, Vellore</small>
              <small>Information Technology and Engineering</small>
            </article>

            <article className='about__card'>
              <TiFolder className='about__icon' />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>"Hey everyone, Myself Arinjay Jha and I am a pre-final year student persuing Batchelor of Technology or Btech in Information Technology at VIT Vellore.  My hobbies include learning about new innovative technological updates, coding as well as reading books. I am passionate about my work and always strive to learn new things to improve myself day by day."
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About