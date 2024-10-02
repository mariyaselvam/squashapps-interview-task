
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import testiProfilName from "../src/assets/testimonial/testi-profil-name-1.png"


const WhatOurClientSays = () => {
  return (
    <>
    <section className="WhatOurClientSays-sec">
    <h3 className="WhatOurClientSays-tit">
    What Our Client Says
    </h3>
      <div className="container">
        <div className="row">
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,   // Delay between slides (in ms)
          disableOnInteraction: true,  // Keep autoplay running after user interactions
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="testimonial-cards" >
            <div className="testimo-inner-card">
                  <div className="testimonial-profial-img">
                    <img src={testiProfilName} alt="" />
                  </div>
                  <div className="testi-profil-name">
                  Maria Crist
                  </div>

              <p className="testimo-inner-card-para">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor erat nec urna congue dapibus. Etiam sollicitudin eget massa nec fringilla. Phasellus varius quam id felis accumsan volutpat. “
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-cards" >
            <div className="testimo-inner-card">
                  <div className="testimonial-profial-img">
                    <img src={testiProfilName} alt="" />
                  </div>
                  <div className="testi-profil-name">
                  Maria Crist
                  </div>

              <p className="testimo-inner-card-para">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor erat nec urna congue dapibus. Etiam sollicitudin eget massa nec fringilla. Phasellus varius quam id felis accumsan volutpat. “
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-cards" >
            <div className="testimo-inner-card">
                  <div className="testimonial-profial-img">
                    <img src={testiProfilName} alt="" />
                  </div>
                  <div className="testi-profil-name">
                  Maria Crist
                  </div>

              <p className="testimo-inner-card-para">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor erat nec urna congue dapibus. Etiam sollicitudin eget massa nec fringilla. Phasellus varius quam id felis accumsan volutpat. “
              </p>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default WhatOurClientSays