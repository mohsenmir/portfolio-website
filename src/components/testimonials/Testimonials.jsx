import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg';
import AVATAR2 from '../../assets/avatar2.jpg';
import AVATAR3 from '../../assets/avatar3.jpg';
import AVATAR4 from '../../assets/avatar4.jpg';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";



const data = [
  {
    avatar: AVATAR1,
    name: 'Tina Ghaderi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur cupiditate minus iusto aperiam ad officia vero, alias laudantium harum, aspernatur consequuntur illo molestiae velit. Similique rem ipsam sint aliquam.'
  },
  {
    avatar: AVATAR2,
    name: 'Ali Saboori',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur cupiditate minus iusto aperiam ad officia vero, alias laudantium harum, aspernatur consequuntur illo molestiae velit. Similique rem ipsam sint aliquam.'
  },
  {
    avatar: AVATAR3,
    name: 'Erfan Alizadeh',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur cupiditate minus iusto aperiam ad officia vero, alias laudantium harum, aspernatur consequuntur illo molestiae velit. Similique rem ipsam sint aliquam.'
  },
  {
    avatar: AVATAR4,
    name: 'Saman Ghodus',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum pariatur cupiditate minus iusto aperiam ad officia vero, alias laudantium harum, aspernatur consequuntur illo molestiae velit. Similique rem ipsam sint aliquam.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{clickable:true}} className='container testimonials__container'>
        {data.map(({avatar,name,review}, index)=> {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5>{name}</h5>
              <small className='client__review'> {review} </small>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials