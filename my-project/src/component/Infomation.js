import Image from "next/image";
import Link from "next/link";
const Information = ({ informatioin }) => {
  return (
    <>
      {informatioin.map((item, index) => (
        <div key={index} className="information">
          <div className="">
            <Image src={item.url} width={1920} height={1080} />
          </div>
          <div className="information-content">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="information-date">{item.date}</p>
            <Link href="#" className="information-link"> Read more</Link>
          </div>
        </div>
      ))}
    </>
  );
};
export default Information;
