import Image from 'next/image';

interface CoinItemProps {
  src: string;
  name: string;
}

const coinData = [
  { id: 1, src: "/images/coin_ic1.png", name: "INJECTIVE" },
  { id: 2, src: "/images/coin_ic2.png", name: "ORCA" },
  { id: 3, src: "/images/coin_ic3.png", name: "ZETA MARKETS" },
  { id: 4, src: "/images/coin_ic4.png", name: "DRIFT PROTOCOL" },
  { id: 5, src: "/images/coin_ic5.png", name: "MARGINFI" },
  { id: 6, src: "/images/coin_ic6.png", name: "LIFITY" },
  { id: 7, src: "/images/coin_ic7.png", name: "DEXLAB" },
  { id: 8, src: "/images/coin_ic8.png", name: "COIN RABBIT" },
  { id: 9, src: "/images/coin_ic9.png", name: "MANGO MARKETS" },
  { id: 10, src: "/images/coin_ic10.png", name: "LIFINITY" },
  { id: 11, src: "/images/coin_ic1.png", name: "INJECTIVE" },
  { id: 12, src: "/images/coin_ic2.png", name: "ORCA" },
  { id: 13, src: "/images/coin_ic3.png", name: "ZETA MARKETS" },
  { id: 14, src: "/images/coin_ic4.png", name: "DRIFT PROTOCOL" }
];

const CoinItem = ({ src, name } : CoinItemProps) => (
  <li>
    <div className="coinItem">
      <div className="icon">
        <Image
          src={src}
          alt={`${name} coin thumbnail`}  // Updated alt text
          width={41}
          height={41}
          priority
        />
      </div>
      <div className="tcon">
        <h4 className="dft font-ExtraBold text-light">{name}</h4>
      </div>
    </div>
  </li>
);

const CoinList = () => (
  <ul className="coinList">
    {coinData.map(({ id, src, name }, index) => (
      <CoinItem key={`${id}-${name}-${index}`} src={src} name={name} />
    ))}
  </ul>
);

export default CoinList;