import Image from "next/image";
import Link from "next/link";
const Information = ({ information }) => {
  return (
    <>
      <div className="flex w-full  ">
        <div className="w-3/5 px-[24px] py-[32px]">
          <Image
            src="/assets/images/information-main.jpg"
            width={1200}
            height={800}
            layout="responsive"
            alt="Banner information main"
            className="w-full h-full object-cover"
          />
          <div className="mt-4">
            <h2 className="text-5xl font-bold text-gray-600">
              It doesn't hurt to keep practicing
            </h2>
            <p className="text-gray-600 pt-[24px] text-2xl">
              "Curabitur vitae libero in ipsum porttitor consequat. Aliquam et
              commodo lectus, nec consequat neque. Sed non accumsan urna.
              Phasellus sed consequat ex. etiam eget magna laoreet, efficitur
              dolor consequat, tristique ligula.
              <p className="text-gray-600 pt-[64px] text-2xl">
                Emanuel, Sr Strategist at Hiring.com
              </p>
            </p>
          </div>
        </div>

        <div className="w-2/5">
          {information.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-[32px] w-full gap-4 hover:bg-gray-200 cursor-pointer hover:scale-105"
            >
              <div className="w-[35%] aspect-square overflow-hidden">
                <Image
                  src={item.url}
                  width={600}
                  height={600}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="font-semibold text-3xl text-gray-600"  >{item.title}</h2>
                <p className="text-gray-600 text-xl pt-[8px]">{item.date}</p>
                <Link
                  href="#"
                  className="text-blue-500 hover:underline block  pt-[8px] text-xl"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Information;
