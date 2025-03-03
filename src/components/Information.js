import Image from "next/image";
import Link from "next/link";
const Information = ({ information }) => {
  return (
    <>
      <div 
      >
        <Image
          src="/assets/images/information-main.jpg"
          layout="responsive"
          width={1200}
          height={800}
          alt="Banner information main"
        />
        <h2>It doesn't hurt to keep practicing</h2>
        <p>
          "Curabitur vitae libero in ipsum porttitor consequat. Aliquam et
          commodo lectus, nec consequat neque. Sed non accumsan urna. Phasellus
          sed consequat ex. etiam eget magna laoreet, efficitur dolar consequat,
          tristique ligula. <br />
          <br />
          Emanuel, Sr Strategist at Hiring.com
        </p>
      </div>
      <div>
      {information.map((item, index) => (
        <div key={index} className="information flex px-[16px] pb-[16px] w-100  ">
          <div className=" ">
            <Image src={item.url} width={600} height={600} />
          </div>
          <div className="information-content">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="information-date">{item.date}</p>
            <Link href="#" className="information-link">
              {" "}
              Read more
            </Link>
          </div>
        </div>
      ))}

      </div>
    
    </>
  );
};
export default Information;
