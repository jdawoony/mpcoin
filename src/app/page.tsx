'use client';
import { useState } from 'react';
import { useEffect } from 'react'; // useEffect 추가 서버단에선 아무것도 그리지마

import ModalReady from '../components/ModalReady';
import Navigation from '../components/Navigation';
//import Header from '../components/Header';
import Mpcoin from '../containers/main/Mpcoin';
import Friends from '../containers/main/Friends';
import About from '../containers/main/About';
import Opos from '../containers/main/Opos';
import Unlocked from '../containers/main/Unlocked';
import SaveTheEarth from '../containers/main/SaveTheEarth';
import Intergrations from '../containers/main/Intergrations';
import Holiday from '../containers/main/Holiday';
import Products from '../containers/main/Products';
import Explore from '../containers/main/Explore';
import Links from '../containers/main/Links';
import Tail from '../containers/main/Tail';

const Home = () => {
  const [isModalActive, setIsModalActive] = useState(false);  // Modal state
  const [isNavigationActive, setIsNavigationActive] = useState(false);  // Navigation state

  // [추가] 브라우저 마운트 체크
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 아직 브라우저가 아니라면(서버라면) 아무것도 그리지 않음
  if (!mounted) {
    return null;
  }
  
  return (
    <main>
      <Header setIsNavigationActive={setIsNavigationActive}  isNavigationActive={isNavigationActive} />
      <Navigation isActive={isNavigationActive} setIsActive={setIsNavigationActive} />
      <ModalReady isActive={isModalActive} setIsActive={setIsModalActive} />
      <Mpcoin setIsModalActive={setIsModalActive} />
      <Friends />
      <About setIsModalActive={setIsModalActive} />
      <Opos setIsModalActive={setIsModalActive}  />
      <SaveTheEarth />
      <Unlocked />
      <Intergrations />
      <Holiday />
      <Products />
      <Explore setIsModalActive={setIsModalActive} />
      <Links />
      <Tail />
    </main>
  );
}

export default Home;