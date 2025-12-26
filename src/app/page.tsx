'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

// [중요] 모든 컴포넌트를 ssr: false로 불러옵니다. 
// 이렇게 하면 빌드할 때 서버가 이 파일들을 아예 건드리지 않습니다.
const Header = dynamic(() => import('../components/Header'), { ssr: false });
const Navigation = dynamic(() => import('../components/Navigation'), { ssr: false });
const ModalReady = dynamic(() => import('../components/ModalReady'), { ssr: false });
const Mpcoin = dynamic(() => import('../containers/main/Mpcoin'), { ssr: false });
const Friends = dynamic(() => import('../containers/main/Friends'), { ssr: false });
const About = dynamic(() => import('../containers/main/About'), { ssr: false });
const Opos = dynamic(() => import('../containers/main/Opos'), { ssr: false });
const Unlocked = dynamic(() => import('../containers/main/Unlocked'), { ssr: false });
const SaveTheEarth = dynamic(() => import('../containers/main/SaveTheEarth'), { ssr: false });
const Intergrations = dynamic(() => import('../containers/main/Intergrations'), { ssr: false });
const Holiday = dynamic(() => import('../containers/main/Holiday'), { ssr: false });
const Products = dynamic(() => import('../containers/main/Products'), { ssr: false });
//const Explore = dynamic(() => import('../containers/main/Explore'), { ssr: false });
const Links = dynamic(() => import('../containers/main/Links'), { ssr: false });
const Tail = dynamic(() => import('../containers/main/Tail'), { ssr: false });

const Home = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isNavigationActive, setIsNavigationActive] = useState(false);

  return (
    <main>
      <Header setIsNavigationActive={setIsNavigationActive} isNavigationActive={isNavigationActive} />
      <Navigation isActive={isNavigationActive} setIsActive={setIsNavigationActive} />
      <ModalReady isActive={isModalActive} setIsActive={setIsModalActive} />
      <Mpcoin setIsModalActive={setIsModalActive} />
      <Friends />
      <About setIsModalActive={setIsModalActive} />
      <Opos setIsModalActive={setIsModalActive} />
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