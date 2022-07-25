import React from 'react'
import './footer.css'
import {FaInstagram,FaTwitter,FaTelegram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer> 
      <a href='#' className='footer__logo'>EGATOR</a>

      <ul className='permalinks'>
        <li> <a href='#'>Home</a> </li>
        <li> <a href='#about'>About</a> </li>
        <li> <a href='#experience'>Experience</a> </li>
        <li> <a href='#services'>Services</a> </li>
        <li> <a href='#portfolio'>Portfolio</a> </li>
        <li> <a href='#testimonials'>Testimonials</a> </li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.instagram.com/mohsenmiir'><FaInstagram/></a>
        <a href='https://www.twitter.com/mohsenmiir'><FaTwitter/></a>
        <a href='https://www.t.me/mohsenmiir'><FaTelegram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer