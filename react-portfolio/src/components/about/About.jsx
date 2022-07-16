import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderAdd} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5> Me connaitre </h5>
      <h2> A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5> Experience</h5>
              <small> +1 an d'experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5> Clients</h5>
              <small> 200+ world</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderAdd className='about__icon'/>
              <h5> Projet</h5>
              <small> +3 projets complétés </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nobis doloribus corporis aut molestias aliquid nam dicta neque rerum facere, illo ipsum quibusdam autem voluptatem nemo dolorum minus officiis quia?
          </p>

          <a href="#contact" className='btn btn-primary'> Me contacter </a>
        </div>
      </div>
    </section>
  )
}

export default About
