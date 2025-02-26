import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <header className="">
        <nav className="">
          <ul className="flex justify-center items-center gap-4">
            <li>
              <Link href="/">
                <Image
                  src="/assets/images/ic-logo.svg"
                  width={50}
                  height={50}
                  alt="Logo"
                />
              </Link>
            </li>
            <li>
              <Link href="/on-campus">
                <Image
                  src="/assets/images/ic-on-campus.svg"
                  width={50}
                  height={50}
                  alt="oncampus"
                />
              </Link>
            </li>
            <li>
              <Link href="/online">
                <Image
                  src="/assets/images/ic-online.svg"
                  width={50}
                  height={50}
                  alt="online"
                />
              </Link>
            </li>
            <li>
              <Link href="/login">
                <Image
                  src="/assets/images/ic-login.svg"
                  width={50}
                  height={50}
                  alt="oncampus"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

