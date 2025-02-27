import Image from "next/image";
import Information from "../component/Infomation";
import Course from "../component/Course";
import Thesis from "@/component/Thesis";

export const infomation = [
  {
    url: "/assets/images/information-orientation-mobile.jpg",
    title: "Orientation date",
    date: "Tue 10/11 & Wed 10/12: 8am-3am",
  },
  {
    url: "/assets/images/information-campus-mobile.jpg",
    title: "Our campus",
    date: "Find which campus is close by you",
  },
  {
    url: "/assets/images/information-guest-lecture-mobile.jpg",
    title: "Special guest lecture",
    date: "Join a keynote with Oliver Sack about music in medical treatment",
  },
];

export const course = [
  {title: "Software Engineering",
},
{
  title: "Computer Art",
}, 
{
  title: "Design",
},
{
  title: "Data",
},
{ 
  title: "Business",
},
{
  title: "Marketing",

},
];
const page = () => {
  return (
    <>
      <main>
        <section className="hero">
          <div className="">
            <Image src="/assets/images/banner.jpg" width={1920} height={1080} />
          </div>
          <div className="bg-[#DBDBDB]  pb-[32px]">
            <h1 className="text-2xl font-bold pt-[32px] px-[16px]">
              Learn someting new everday
            </h1>
            <p className="text-base font-semibold pt-[32px] px-[16px] pb-[24px] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

            <button className="w-full  bg-[#9B9B9B] px-[16px]">
              Start here
            </button>
          </div>
        </section>

        <section className="information border-b border-b-1">
          <Information information={information} />
        </section>

        <section className="course">
          <h2 className="text-2xl text-center mb-[16px]">Start learning</h2>
          <Course course={course}/>
        </section>

        <section className="thesis">
          <Thesis />
        </section>
      </main>
    </>
  );
};
export default page;
