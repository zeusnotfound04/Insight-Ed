  import { useState, useEffect } from "react";
  import { FiMenu } from "react-icons/fi";
  import { GrClose } from "react-icons/gr";
  import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
              ? "h-16 md:h-18 p-4 md:p-8 fixed top-5 bg-white/30 backdrop-blur-md border font-medium rounded-full w-[60%]"
              : "h-20 p-6 md:p-12 top-0 w-full"
          } m-auto fixed left-1/2 translate-x-[-50%] drop-shadow-xl z-20`}
        >
          <div className="flex items-center">
            <img className="w-8" src={Logo} alt="Logo" />
            <h1
              className={`md:text-base uppercase text-black ${
                scrolling ? "font-medium lg:text-xl" : "lg:text-2xl font-bold"
              }`}
            >
              Insight Ed
            </h1>
          </div>

          {/* Nav Links */}
          <ul
            className={`md:flex navLink gap-5 font-medium text-black [&>li]:cursor-pointer absolute md:rounded-full md:static top-20 max-md:p-3 text-center ${
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
                className={`block md:inline-block py-4 px-6 font-medium  hover:bg-gray-100 link-effect hover:text-blue-500 transition-all duration-200 ease-in-out md:py-0 ${
                  scrolling ? "text-small" : "text-base"
                }`}
              >
                <li>{link.title}</li>
              </Link>
            ))}

            {/* Get Demo Button inside mobile menu */}
            <li className="block md:hidden mt-4">
              <Link
                to="#"
                className="block rounded-lg px-6 py-3 text-base font-semibold text-white bg-black hover:bg-gray-50 hover:text-black"
              >
                Get a Demo
              </Link>
            </li>
          </ul>

          {/* Get Demo Button on larger screens */}
          <div className="hidden md:block py-6">
            <NavBtn scrolling={scrolling} />
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
