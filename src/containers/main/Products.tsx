import Image from 'next/image'
import MasonryGrid from '../../components/MasonryGrid';

const Products = () => {
  return (
    <div id="Products">
      <div className="top">
        <div className="con">
          <div className="mole">
              <Image
                className="mole_front"
                src="/images/mole_front.png"
                alt="mole_front"
                width={163}
                height={140}
              />
              <Image
                className="mole_back"
                src="/images/mole_back.png"
                alt="mole_back"
                width={163}
                height={140}
              />
          </div>
          <div className="txt">
              <Image
                className="MustHaves"
                src="/images/MustHaves.svg"
                alt="MustHaves"
                width={236}
                height={27}
              />
          </div>
        </div>
      </div>
      <MasonryGrid />
    </div>
  );
};

export default Products;