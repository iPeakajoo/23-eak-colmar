import Hero from "../components/Hero";
import Information from "../components/Information";
import Course from "../components/Course";
import Thesis from "@/components/Thesis";


export const thesis = [
  {
    url: "/assets/images/thesis-fisma.jpg",
    title: "Fisma: Design and Prototype",
    description: "Designer showcase of new prototype product",
    alt:"thesis-fisma"
  },
  {
    url: "/assets/images/thesis-now-and-then.jpg",
    title: "Now and then",
    description: "Research study about New York",
    alt:"thesis-now-and-then" 
  },

];

export const information = [
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
    title: "Our guest lecture",
    date: "Join a keynote with Oliver Sack about music in medical treatment",
  },
];

export const course = [
  {title: "Software Engineering",
    url: "/assets/images/course-software.jpg",
    description: "Web Development, Mobile Development, iOT, APIs",
},
{
  title: "Computer Art",
  url: "/assets/images/course-computer-art.jpg",
  description: "Web Development, Mobile Development, iOT, APIs",
}, 
{
  title: "Design",
  url: "/assets/images/course-design.jpg",
  description: "Web Development, Mobile Development, iOT, APIs",
},
{
  title: "Data",
  url: "/assets/images/course-data.jpg",
  description: "Web Development, Mobile Development, iOT, APIs",
},
{ 
  title: "Business",
  url: "/assets/images/course-business.jpg",
  description: "Web Development, Mobile Development, iOT, APIs",
},
{
  title: "Marketing",
  url: "/assets/images/course-marketing.jpg",
  description: "Web Development, Mobile Development, iOT, APIs",

},
];
const page = () => {
  return (
    <>
     
      <main className="">
        <section className="hero flex items-center bg-gray-200 px-[24px] py-[32px] gap-[24px]">
          <Hero />
        </section>

        <section className="information">
          <Information information={information} />
        </section>

        <section className="course  bg-gray-200">  
          <Course course={course} className=""/>
        </section>

        <section className="thesis">
          
          <Thesis thesis={thesis}/>
        </section>
      </main>
    </>
  );
};
export default page;

