import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper'

const Carousal = () => {





  return (
    <div>
        <Swiper
	breakpoints={{
    0: {
      slidesPerView: 1,
    },
    480:{
    	slidesPerView:4,
    },
    768: {
      slidesPerView: 5,
    },

  }}
      spaceBetween={50}
     modules={[Autoplay]}
     autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
     loop={true}
    >
      <SwiperSlide>

    </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Carousal