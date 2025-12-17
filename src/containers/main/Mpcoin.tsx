import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

interface MpcoinProps {
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

const Mpcoin: React.FC<MpcoinProps> = ({ setIsModalActive }) => {
  const handleMopineClick = () => {
    setIsModalActive(true);  // 모달 활성화
  };

  return (
    <div id="Mpcoin" className="min_h">
      <div className="mopineAi" onClick={handleMopineClick}>
        <Image
          src="/images/ai_sym_molepin.png"
          alt="menu icon"
          width={120}
          height={124}
          priority
        />
      </div>
    </div>
  );
};

export default Mpcoin;