import React from 'react'
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { BiBook , BiMessageRoundedDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a> 
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <BsInfoCircle/> </a> 
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBook/> </a> 
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <RiServiceLine/> </a> 
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessageRoundedDetail/> </a> 
    </nav>
  )
}

export default Nav