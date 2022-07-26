import React from 'react'
import './header.css';
import CTA from './CTA';
import me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <section id='header' className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohsen Mirshekari</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA></CTA>
        <HeaderSocials/>
        <div className='me'>
          <img src={me} alt='my pic' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </section>
    </header>
  )
}

export default Header