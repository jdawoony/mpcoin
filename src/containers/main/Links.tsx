import Image from 'next/image'

const LINKS = [
  {src: "/images/sns_x.png", name: "sns_x", url:"https://x.com"},
  {src: "/images/sns_discord.png", name: "discord", url:"https://discord.com"},
  {src: "/images/sns_instagram.png", name: "instagram", url:"https://instagram.com"},
  {src: "/images/sns_facebook.png", name: "facebook", url:"https://facebook.com"},
  {src: "/images/sns_telegram.png", name: "telefram", url:"https://youtube.com"},
  {src: "/images/sns_youtube.png", name: "sns_youtube", url:"https://telegram.org"},
];

const Links = () => {
  return (
    <div id="Links" className='sec_dvd'>
      <div className="linkItems">
      {LINKS.map(({ src, name, url }, index) => (
        <a key={index} href={url} target="_blank">
          <Image
              className="oposThumbnail"
              src={src}
              alt={name} 
              width={50}
              height={49}
              priority
          />
        </a>
      ))}
      </div>
      <div className="centerMoleWrp">
          <Image
              className="centerMole"
              src="/images/center_mole.jpg"
              alt="mole" 
              width={512}
              height={490}
              priority
          />
        </div>
        <div className="footLinks">
          <div className="menuItem">
            <p className="dft mini"><a href="#" className="dept1">HOME</a></p>
            <h6 className="dft conbox conbox_xxs">
              <a className="dept2" href="#">About</a>
              <a className="dept2" href="#">Save <br /> the world</a>
              <a className="dept2" href="#">Intergration</a>
              <a className="dept2" href="#">Goods</a>
            </h6>
          </div>
          <div className="menuItem">
            <p className="dft mini"><a href="#" className="dept1">CONTACT</a></p>
            <h6 className="dft conbox conbox_xxs">
              <a className="dept2" href="#">Partnerships</a>
              <a className="dept2" href="#">Events</a>
            </h6>
          </div>
          <div className="menuItem">
            <p className="dft mini"><a href="#" className="dept1">KEY <br />PROJECTS</a></p>
            <h6 className="dft conbox conbox_xxs">
              <a className="dept2" href="#">Rewards</a>
              <a className="dept2" href="#">Mark</a>
              <a className="dept2" href="#">Scooper</a>
              <a className="dept2" href="#">Live</a>
              <a className="dept2" href="#">Bets</a>
            </h6>
          </div>
          <div className="menuItem">
            <p className="dft mini"><a href="#" className="dept1">MOLEPIN <br />  FAMILY</a></p>
            <h6 className="dft conbox conbox_xxs">
              <a className="dept2" href="#">Molepin Art</a>
              <a className="dept2" href="#">Exhange </a>
              <a className="dept2" href="#">Fitness</a>
            </h6>
          </div>
        </div>
    </div>
  );
};

export default Links;