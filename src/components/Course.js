import Image from "next/image";
import Link from "next/link";
const Course = ({ course }) => {
  return (
    <>
      <h2 className=" text-6xl font-bold text-center p-[32px] text-gray-600">Start learning</h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-[32px] px-[32px] pb-[32px]">
        {course.map((item, index) => (
          <div key={index} className="course-item">
            <div className="course-title bg-white hover:bg-gray-300 cursor-pointer hover:scale-105 ">
              <Image
                src={item.url}
                width={600}
                height={600}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="pt-[16px] px-[16px] pb-[24px]">
                <h2 className="text-3xl font-medium text-gray-600 ">{item.title}</h2>
                <p className="text-2xl font-light pt-[8px] text-gray-600">COURSE</p>
                <p className="text-2xl font-light pt-[8px] text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Course;
