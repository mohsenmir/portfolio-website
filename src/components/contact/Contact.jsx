import React from 'react'
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {BsTelegram, BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch.</h5>
      <h2>Contact me!</h2>
      
      <div className="container contact__container">

        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>MIRSHEKARI.DEV@GMAIL.COM</h5>
            <a href='mailto:mirshekari.dev@gmail.com' target={'_blank'}>Send a message!</a>
          </article>
          <article className='contact__option'>
            <BsTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@mohsenmiir</h5>
            <a href='https:t.me/mohsenmiir' target={'_blank'}>Send a message!</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp!</h4>
            <h5>+98 913 417 1655</h5>
            <a href='mailto:mirshekari.dev@gmail.com' target={'_blank'}>Send a message!</a>
          </article>
        </div>

        <form action=''>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message!</button>
        </form>
      </div>
    </section>
  )
}

export default Contact