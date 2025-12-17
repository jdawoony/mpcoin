'use client';

import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Btn from '../../components/Btn';

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

interface ExploreProps {
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

const Explore: React.FC<ExploreProps> = ({ setIsModalActive }) => {
  const handleMopineClick = () => {
    setIsModalActive(true);  // 모달 활성화
  };
  return (
    <div id="Explore" className="eventItem">
      <Swiper {...swiperOptions}>
        {SLIDES.map(({ id }, index) => (
        <SwiperSlide className={`swiperItem${id}`}>
          <div className="exploreItem">
            <div>
              <div className="top">
                <p className="dft font-Bold mb-none c_gray">
                    1. 6.9 Trillion Total MP Issue <br />
                    2. Combined with stable tokens <br />
                    3. Utility Reward Methods <br />
                    4. the home of Web3 innovation
                </p>
                <div className="img conbox conbox_xs">
                  <Image
                    className="mole_bt"
                    src="/images/mole_bt.png"
                    alt="Mpcoin logo"
                    width={150}
                    height={107}
                    priority
                  />
                </div>
              </div>
              <div className="text-center">
                <Btn 
                  label="Explore" 
                  width="90%" 
                  variant="secondary"
                  onClick={handleMopineClick}
                />
              </div>
            </div>
            <div className="circle"></div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Explore;