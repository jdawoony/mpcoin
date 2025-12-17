"use client";

import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

// Props 타입 정의
interface ModalReadyProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const ModalReady: React.FC<ModalReadyProps> = ({ isActive, setIsActive }) => {
  const closeModal = () => {
    setIsActive(false);  // 모달을 닫기
  };

  return (
    <div id="ModalReady" className={isActive ? 'active' : ''}>
      <div className="modalCon">
        <Image
          className="gettingReady"
          src="/images/gettingReady.png"
          alt="getting ready"
          width={207}
          height={164}
        />
        <Image
          className="close"
          src="/icons/close.svg"
          alt="close"
          width={32}
          height={32}
          onClick={closeModal}
        />
      </div>
    </div>
  );
};

export default ModalReady;
