'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SLIDES = [
  { id: 1},
  { id: 2},
  { id: 3},
  { id: 4}
];

const swiperOptions = {
  spaceBetween: 50,
  slidesPerView: 1,
  pagination: { clickable: true },
  modules: [Pagination],
};

const Friends = () => {
  return (
    <div id="Friends" className="eventItem">
      <Swiper {...swiperOptions}>
        {SLIDES.map(({ id }, index) => (
        <SwiperSlide className='swiperItem1'>
          <div className="friendItem">
            <div>
              <h1 className="dft mb-none">
                Our Friends
              </h1>
              <p className="dft mini mb-none">
                Who breath with the Earth
              </p>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Friends;