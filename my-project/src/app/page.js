import Link from "next/link";
import Image from "next/image";

Link;
const page = () => {
  return (
    <>
      <header className="w-full h-[4rem] bg-gray-100">
        <nav className="p-4">
          <ul className="flex justify-around items-center ">
            <li className="">
              <Link href="/">
                <Image
                  src="/assets/images/ic-logo.svg"
                  width={40}
                  height={40}
                  alt="Logo"
                />
              </Link>
            </li>
            <li>
              <Link href="/on-campus">
                <Image
                  src="/assets/images/ic-on-campus.svg"
                  width={40}
                  height={40}
                  alt="oncampus"
                />
              </Link>
            </li>
            <li>
              <Link href="/online">
                <Image
                  src="/assets/images/ic-online.svg"
                  width={40}
                  height={40}
                  alt="online"
                />
              </Link>
            </li>
            <li>
              <Link href="/login">
                <Image
                  src="/assets/images/ic-login.svg"
                  width={40}
                  height={40}
                  alt="oncampus"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
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
            <div className="px-[16px]">
              <button className="w-full  bg-[#9B9B9B] px-[16px]">
                Start here
              </button>
            </div>
          </div>
        </section>

        <section className="infomation border-b border-b-[1px]">
          <div className=" p-[16px]">
            <div className="">
              <Image
                src="/assets/images/information-orientation-mobile.jpg"
                width={1920}
                height={1080}
              />
            </div>
            <div className="px-[16px] py-[64px]">
              <h2 className="font-semibold">Orientation date</h2>
              <p className="font-normal ">Tue 10/11 & Wed 10/12: 8am-3am</p>
              <h2 className="text-blue-500">Read more</h2>
            </div>
          </div>
          <div>
            <div className="">
              <Image
                src="/assets/images/information-campus-mobile.jpg"
                width={1920}
                height={1080}
              />
            </div>
            <div className="px-[16px] py-[64px] ">
              <h2 className="font-semibold">Orientation date</h2>
              <p className="font-normal ">Tue 10/11 & Wed 10/12: 8am-3am</p>
              <h2 className="text-blue-500">Read more</h2>
            </div>
          </div>
          <div>
            <div className="">
              <Image
                src="/assets/images/information-guest-lecture-mobile.jpg"
                width={1920}
                height={1080}
              />
            </div>
            <div className="px-[16px] pt-[64px] pb-[32px]">
              <h2 className="font-semibold">Orientation date</h2>
              <p className="font-normal ">Tue 10/11 & Wed 10/12: 8am-3am</p>
              <h2 className="text-blue-500">Read more</h2>
            </div>
          </div>
        </section >

        <section className="course">
          <h2>Start learning</h2> 
          <h3>software engineering</h3>
          <h3>Computer art</h3>
          <h3>Design</h3>
          <h3>Data</h3>
          <h3>Business</h3>
          <h3>Marketing</h3>
        </section>

        <section className="thesis">
          <h2>Thesis exhibits</h2>
          <video width="1920" height="1080" controls>
            <source src="/assets/videos/thesis.mp4" type="video/mp4" />
          </video>
        </section>
      </main>
    </>
  );
};
export default page;
