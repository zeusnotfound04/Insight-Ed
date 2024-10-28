import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import Button from "./Button";

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

  const navLinks = [
    { title: "Explore", href: "/" },
    { title: "Pricing", href: "/" },
    { title: "FAQ", href: "/" },
    { title: "About us", href: "/" },
    { title: "Contact us", href: "/" },
  ];

  return (
    <>
      <nav
        className={` flex justify-between items-center bg-white transition-all duration-300 ${
          scrolling
            ? "h-16 md:h-18 p-4 md:p-8 fixed top-5 bg-white/30 backdrop-blur-md border font-medium rounded-full w-[60%]" // Adjusted width for scrolling state
            : "h-20 p-6 md:p-12 top-0 w-full" // Normal width
        } m-auto fixed left-1/2 translate-x-[-50%] drop-shadow-xl z-20`}
      >
        <div className="flex items-center">
          <div className="w-5 p1"></div>
          <img className="w-8" src="src/logo/logo 1200x1200.png" alt="" />
          <h1 className={` md:text-base  uppercase text-black ${scrolling ? "font-medium lg:text-xl" : " lg:text-2xl font-bold"}`}>Insight Ed</h1>
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex gap-5 font-medium text-gray-700 [&>li]:cursor-pointer absolute md:static top-20 max-md:p-3 text-center ${
            openMenu ? "bg-white w-full left-0" : "hidden"
          } ${
            scrolling && openMenu
              ? "top-12 w-full right-0 rounded-b-none"
              : "rounded-b-xl right-5"
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block md:inline-block py-4 px-6 text-base font-medium hover:bg-gray-100 hover:text-blue-500 transition-all duration-200 ease-in-out md:py-0"
            >
              <li>{link.title}</li>
            </a>
          ))}

          {/* Get Demo Button inside mobile menu */}
          <li className="block md:hidden mt-4">
            <a
              href="#"
              className="block rounded-lg px-6 py-3 text-base font-semibold text-white bg-black hover:bg-gray-50 hover:text-black"
            >
              Get a Demo
            </a>
          </li>
        </ul>

        {/* Get Demo Button on larger screens */}
        <div className="hidden md:block py-6">
          <Button />
        </div>

        {/* MOBILE MENU ICONS */}
        <div className="md:hidden">
          <button
            className="text-gray-700"
            onClick={menuHandler}
            aria-label="Menu"
          >
            {openMenu ? <GrClose size={25} /> : <FiMenu size={25} />}
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
