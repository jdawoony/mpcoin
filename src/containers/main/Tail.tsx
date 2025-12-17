import Image from 'next/image'

const Tail = () => {
  return (
    <div id="Tail" className='sec_dvd sec_dvd_lg text-center'>
      <Image
          className="tailLogo"
          src="/images/bi_founderroy.png"
          alt="mole" 
          width={79}
          height={132}
          priority
      />
    </div>
  );
};

export default Tail;