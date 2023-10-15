import React from 'react'
import PRJ1 from '../../assets/proj1.jpg';
import PRJ2 from '../../assets/proj2.jpg';
import PRJ3 from '../../assets/proj3.jpg';

import './portfolio.css'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Fortfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ1} alt="IMG" />
          </div>
          <h3>Movizz</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GyaneshwerJha/movizz" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://musical-brigadeiros-f01109.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ2} alt="IMG" />
          </div>
          <h3>Todo</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GyaneshwerJha/To_Do_MERN" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://to-do-mern-rouge.vercel.app/login" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ3} alt="IMG" />
          </div>
          <h3>Netflix Homepage</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GyaneshwerJha/netflix-home-page" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://flourishing-marzipan-f71875.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio