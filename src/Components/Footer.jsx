import React from "react";

function Footer () {
  return (
    <footer className="bg-black text-white w-full h-screen flex flex-col justify-between p-8 md:p-16">
      {/* Top Section */}
      <div className="flex w-full justify-between">
        {/* Left - Contact Section */}
        <div className="space-y-2 md:space-y-4 text-left">
          <p className="uppercase text-sm">(Let’s Connect)</p>
          <a href="mailto:hello@agentic.com" className="text-xl md:text-2xl font-semibold hover:underline">
            hello@agentic.com
          </a>
          <a href="tel:+1999888777" className="text-xl md:text-2xl font-semibold hover:underline">
            +1999 888 777
          </a>
        </div>

        <div className="space-y-2 md:space-y-4 text-right">
          <p className="uppercase text-sm">(Follow Us)</p>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Medium</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Licensing</a></li>
          </ul>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-red-600 text-7xl md:text-[12vw] font-bold leading-none tracking-tighter">
          AGENTIC®
        </h1>
      </div>

     
      <div className="flex w-full justify-between items-center border-t border-gray-700 pt-4">
        <p className="text-xs md:text-sm">© 2024 by UIHUB.DESIGN</p>
        <p className="text-xs md:text-sm">Made in Framer</p>
      </div>
    </footer>
  );
};

export default Footer;
