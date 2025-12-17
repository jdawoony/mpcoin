"use client";

import { Dispatch, SetStateAction, useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  isNavigationActive: boolean;
  setIsNavigationActive: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setIsNavigationActive, isNavigationActive }) => {
  const handleNavigationShow = () => {
    setIsNavigationActive(true);  // 네비게이션 활성화
  };
  const handleNavigationHide = () => {
    setIsNavigationActive(false);  // 네비게이션 활성화
  };
  const [isSticky, setIsSticky] = useState(false);

  // sticky 효과
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true); 
      } else {
        setIsSticky(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={isSticky ? 'sticky' : ''}>
      <div className="con">
        <a href="#Mpcoin" style={{ position: 'relative', width: '247px', height: '75px' }}>
          <span></span>
          <Image
            className="logo"
            src="/images/BI_molepin.png"
            alt="Mpcoin logo"
            fill
            style={{ objectFit: 'contain' }} 
            priority
          />
        </a>

        <Image
          className="btnMenu"
          src={isNavigationActive ? "/icons/ic_menu_close.svg" : "/icons/ic_menu.svg"} 
          alt="menu icon"
          width={49}
          height={49}
          priority
          onClick={isNavigationActive ? handleNavigationHide : handleNavigationShow}
        />
      </div>
    </header>
  );
};

export default Header;