import Image from "next/image";
const hero = () => {
  return (
    <>
      <div className=" ">
        <Image
          src="/assets/images/banner.jpg"
          layout="responsive"
          width={1200}
          height={800}
          alt="Banner image"
        />
      </div>
      <div className=" w-160">
        <h1 className="text-6xl font-bold text-gray-600">Learn something new every day</h1>
        <p className=" text-4xl text-gray-600 pt-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <button className=" text-white text-2xl  py-[8px] bg-gray-600 w-full mt-6">Start here</button>
      </div>
    </>
  );
};
export default hero;
