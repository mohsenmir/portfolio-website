import React from 'react'
import './about.css';
import me from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>about me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={me} alt='about pic' />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>

            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laboriosam corrupti, error beatae eveniet ipsa, fugiat quam exercitationem blanditiis mollitia inventore minus officiis itaque nostrum iusto neque hic architecto accusantium!
            </p>

            <a href='' className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About