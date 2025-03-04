import Image from "next/image";

const Thesis = ({thesis}) => {
  
  return (
    <>
    <h2 className="text-6xl font-bold text-center p-[32px] text-gray-600">Thesis exhibit</h2>
      <div className="flex w-full  ">
        <div className="w-3/5 px-[24px] ">
          <video width="1920" height="1080" controls>
            <source src="/assets/videos/thesis.mp4" type="video/mp4" />
          </video>
          <div className="mt-[24px] mb-[32px]">
            <h2 className="text-5xl font-bold text-gray-600">Reimagine urban</h2>
            <p className="text-gray-600 pt-[24px] text-2xl">
              "Curabitur vitae libero in ipsum porttitor consequat. Aliquam et
              commodo lectus, nec consequat neque. Sed non accumsan urna.
              Phasellus sed consequat ex. etiam eget magna laoreet, efficitur
              dolor consequat, tristique ligula.
            </p>
          </div>
        </div>

        <div className="w-2/5">
          {thesis.map((item, index) => (
            <div
              key={index}
              className="flex items-center p-[24px] w-full gap-4 hover:bg-gray-200 hover:scale-105 cursor-pointer"
            >
              <div className="w-[35%] aspect-square overflow-hidden">
                <Image
                  src={item.url}
                  width={600}
                  height={600}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="font-semibold text-3xl text-gray-600">{item.title}</h2>
                <p className="text-gray-600 text-xl pt-[8px]">{item.description}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Thesis;
