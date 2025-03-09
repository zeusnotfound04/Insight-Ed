import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { NavBtn } from "./ui/Buttons";
import Logo from "../logo/logo 1200x1200.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpenMenu(false);
  };

  const navLinks = [
    { title: "Explore", to: "#explore", onClick: scrollToSection("explore") },
    { title: "Pricing", to: "#pricing", onClick: scrollToSection("pricing") },
    { title: "FAQ", to: "#faq", onClick: scrollToSection("faq") },
    { title: "About us", to: "#about-us", onClick: scrollToSection("about-us") },
    { title: "Contact us", to: "#contact-us", onClick: scrollToSection("contact-us") },
  ];

  return (
    <>
      <nav
        className={`flex justify-between items-center bg-white transition-all duration-300 ${
          scrolling
            ? "h-14 sm:h-16 md:h-18 p-3 sm:p-4 md:p-8 fixed top-5 bg-white/30 backdrop-blur-md border font-medium rounded-full w-[90%] sm:w-[80%] md:w-[60%]"
            : "h-16 sm:h-18 md:h-20 p-4 sm:p-6 md:p-12 top-0 w-full"
        } m-auto fixed left-1/2 translate-x-[-50%] drop-shadow-xl z-20`}
      >
        <div className="flex items-center gap-2">
          <img 
            className={`${
              scrolling 
                ? "w-6 sm:w-7 md:w-8" 
                : "w-7 sm:w-8 md:w-10"
            } transition-all duration-300`} 
            src={Logo} 
            alt="Logo" 
          />
          <h1
            className={`text-sm sm:text-base md:text-lg uppercase text-black transition-all duration-300 ${
              scrolling 
                ? "font-medium" 
                : "font-bold"
            }`}
          >
            Insight Ed
          </h1>
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex navLink gap-3 md:gap-4 font-medium text-black [&>li]:cursor-pointer absolute md:static top-20 max-md:p-3 text-center ${
            openMenu ? "bg-white w-full left-0" : "hidden"
          } ${
            scrolling && openMenu
              ? "top-12 w-full right-0 rounded-b-none"
              : "rounded-b-xl right-5"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              onClick={link.onClick}
              className={`block md:inline-block py-3 md:py-2 px-4 md:px-3 font-medium 
                text-sm sm:text-base transition-all duration-200 ease-in-out
                hover:bg-blue-50 hover:text-blue-600 rounded-lg
                relative after:absolute after:bottom-0 after:left-0 after:w-full 
                after:h-0.5 after:bg-blue-500 after:scale-x-0 after:origin-right
                after:transition-transform after:duration-300
                hover:after:scale-x-100 hover:after:origin-left
                ${scrolling ? "text-sm" : "text-base"}`}
            >
              <li>{link.title}</li>
            </Link>
          ))}

          {/* Get Demo Button inside mobile menu */}
          <li className="block md:hidden mt-4">
            <Link
              to="https://github.com/zeusnotfound04/-Insight-Ed-SaaS"
              className="block rounded-lg px-4 py-2 text-sm sm:text-base font-semibold text-white bg-black hover:bg-gray-800 transition-colors duration-200"
            >
              Get a Demo
            </Link>
          </li>
        </ul>

        {/* Get Demo Button on larger screens */}
        <div className="hidden md:block">
          <NavBtn scrolling={scrolling} />
        </div>

        {/* MOBILE MENU ICONS */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            onClick={menuHandler}
            aria-label="Menu"
          >
            {openMenu ? <GrClose size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Fullscreen Background when menu is open */}
      {openMenu && (
        <div
          onClick={menuHandler}
          className="h-screen w-screen bg-black/50 fixed top-0 left-0 z-10"
        ></div>
      )}
    </>
  );
};

export default Navbar;