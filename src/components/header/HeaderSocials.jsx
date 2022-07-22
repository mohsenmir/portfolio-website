import React from 'react'
import { BsLinkedin , BsGithub , BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/mohsen-mirshekari-49b150246/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/mohsenmir' target='_blank'><BsGithub/></a>
        <a href='https://www.instagram.com/mohsenmiir' target='_blank'><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials