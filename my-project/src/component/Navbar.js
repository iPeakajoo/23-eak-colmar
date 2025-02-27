import Link from "next/link";
import Image from "next/image";

const Navbar = ({ navigation = [] }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-menu">
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