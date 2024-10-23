import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
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
        className={`flex justify-between items-center bg-white h-20 p-6  md:p-12 w-[89%] m-auto fixed left-1/2 translate-x-[-50%] drop-shadow-xl z-20 ${
          scrolling
            ? "fixed top-5 bg-white/30 backdrop-blur-md border w-5  rounded-full "
            : "top-0 w-full rounded-none md:p-6 "
        }`}
      >
        <div className="flex items-center">
          <div className="w-5 p1"></div>
          <img className="w-8" src="src/logo/logo 1200x1200.png" alt="" />
          <h1 className="lg:text-2xl md:text-base  font-bold uppercase text-black">Insight Ed</h1>
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
              className="block md:inline-block py-4 px-6 text-base  font-medium hover:bg-gray-100 hover:text-blue-500 transition-all duration-200 ease-in-out md:py-0"
            >
              <li>{link.title}</li>
            </a>
          ))}

          {/* Get Demo Button inside mobile menu */}
          <li className="block md:hidden mt-4">
            <a
              href="#"
              className="block  rounded-lg px-6 py-3 text-base font-semibold text-white bg-black hover:bg-gray-50 hover:text-black"
            >
              Get a Demo
            </a>
          </li>
        </ul>

        {/* Get Demo Button on larger screens */}
        <div className="hidden md:block py-6">
          <a
            href="#"
            className="-mx-3 block  rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-black hover:bg-gray-50 hover:text-black"
          >
            Get a Demo
          </a>
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
