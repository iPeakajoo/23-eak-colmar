import Link from "next/link";
import Image from "next/image";

const Navbar = ({ navigation = [] }) => {
  return (
    <header className="header">
     
      <nav className="desktop-nav h-[64px] flex justify-between items-center mx-[24px]  md:flex hidden">
      <div className="flex items-center justify-center">
      <Image src={"/assets/images/ic-logo.svg"} width={50} height={50} alt="Logo" />
      <span className=" text-[32px] font-medium text-gray-600">COLMARAC</span>
      <span className=" text-[32px] font-normal text-gray-400">ACADEMY</span>
      </div>
      
        <ul className="flex items-center justify-center gap-[16px] text-xl text-gray-600">
          <li>
            <Link href="#">On Campus</Link>
          </li>
          <li>
            <Link href="#">Online</Link>
          </li>
          <li>
            <Link href="#">For companies</Link>
          </li>
          <li>
            <Link href="#">Sign in</Link>
          </li>
        </ul>
      
        </nav>
      <nav className="mobile-nav p-4 md:hidden">
        <ul className="navbar-menu flex items-center justify-between">
          {navigation.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <Image src={item.url} width={50} height={50} alt={item.alt} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;