import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


import "./styles/globals.css";

export const metadata = {
  title: "23-eak-colmar",
  description: "Project Layout",
  keywords: ["react", "layout"],
};

export const navigation = [
  { url: "/assets/images/ic-logo.svg", href: "/", alt: "Logo" },
  {
    url: "/assets/images/ic-on-campus.svg",
    href: "/on-campus",
    alt: "On Campus",
  },
  { url: "/assets/images/ic-online.svg", href: "/online", alt: "Online" },
  { url: "/assets/images/ic-login.svg", href: "/login", alt: "Login" },
];

const Layout = ({ children }) => {
  return (
    <html>
      <body>
      <Navbar navigation={navigation} />
        {children}

        <Footer/>
      </body>
    </html>
  );
};
export default Layout;
