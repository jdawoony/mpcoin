'use client';

import Image from 'next/image'
import Btn from '../../components/Btn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Dispatch, SetStateAction } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SLIDES = [
  { id: 1, title: 'Only Possible on \n Molepin, OPOS1', content: 'Most Of the unsold Volume \n will be converted to DEFI, \n DAO and utility reward \n method', img: '/images/coins.png' },
  { id: 2, title: 'Only Possible on \n Molepin, OPOS2', content: 'Most Of the unsold Volume \n will be converted to DEFI, \n DAO and utility reward \n method', img: '/images/coins.png' },
  { id: 3, title: 'Only Possible on \n Molepin, OPOS3', content: 'Most Of the unsold Volume \n will be converted to DEFI, \n DAO and utility reward \n method', img: '/images/coins.png' },
  { id: 4, title: 'Only Possible on \n Molepin, OPOS4', content: 'Most Of the unsold Volume \n will be converted to DEFI, \n DAO and utility reward \n method', img: '/images/coins.png' }
];

const swiperOptions = {
  spaceBetween: 50,
  slidesPerView: 1,
  pagination: { clickable: true },
  modules: [Pagination],
};

interface OposProps {
    setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

const Opos: React.FC<OposProps> = ({ setIsModalActive }) => {
    const handleMopineClick = () => {
      setIsModalActive(true);  // 모달 활성화
    };
  return (
    <div id="Opos" className="eventItem">
      <Swiper {...swiperOptions}>
        {SLIDES.map(({ id, title, content, img }, index) => (
        <SwiperSlide key={id} className={`swiperItem${id}`}>
          <div className="oposItem">
            <div>
              <div className="txt">
                <h5 className="dft mb-none text-light" style={{ whiteSpace: 'pre-line' }}>
                  {title}
                </h5>
                <p className="dft mini mb-none c_gray conbox conbox_xxs" style={{ whiteSpace: 'pre-line' }}>
                  {content}
                </p>
              </div>
              <div className="img">
                <Image
                    className="oposThumbnail"
                    src={img}
                    alt={`thumbnail`} 
                    width={147}
                    height={147}
                    priority
                />
                <div className="conbox conbox_xs">
                  <Btn 
                    label="Join Now"
                    width="150px" 
                    onClick={handleMopineClick}
                   />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Opos;