import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap"; // Import GSAP

function Footer() {
  useEffect(() => {
    // GSAP animation for the text gradient color change with grayscale colors
    gsap.to(".insight-text", {
      backgroundImage: "linear-gradient(45deg, #1c1c1c, #333333, #666666, #999999, #cccccc, #f5f5f5, #999999)",
      backgroundSize: "800% 800%",  // Large size for smooth gradient transition
      backgroundPosition: "200% 200%",  
      repeat: -1, 
      duration: 6, 
      ease: "none", 
      yoyo: true, 
    });

    gsap.to(".insight-text", {
      textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px #f5f5f5",
      repeat: -1,
      duration: 1.5,
      yoyo: true,
      ease: "none",
    });

    gsap.to(".insight-text", {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <footer id="contact-us" className="bg-black mt-20 text-white w-full h-screen flex flex-col justify-between p-8 md:p-16">
      
      <div className="flex w-full justify-between">
      
        <div className="space-y-2 md:space-y-4 text-left">
          <p className="uppercase text-sm">(Let’s Connect)</p>
          <Link to="mailto:hello@agentic.com" className="text-xl md:text-2xl font-semibold hover:underline">
            support@insight-ed.in
          </Link>
        </div>

        <div className="space-y-2 md:space-y-4 text-right">
          <p className="uppercase text-sm">(Follow Us)</p>
          <ul className="space-y-1">
            <li><Link to="https://www.linkedin.com/company/insightedin" className="hover:underline">LinkedIn</Link></li>
            <li><Link to="https://substack.com/@insighted1" className="hover:underline">Sub Stack</Link></li>
            <li><Link to="https://www.instagram.com/insighted.in/" className="hover:underline">Instagram</Link></li>
            <li><Link to="https://www.youtube.com/@InsightED116" className="hover:underline">Youtube</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <h1 className="insight-text text-7xl md:text-[12vw] font-bold leading-none tracking-tighter" style={{
          backgroundClip: "text", 
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}>
          INSIGHT ED
        </h1>
      </div>

      <div className="flex w-full justify-between items-center border-t border-gray-700 pt-4">
        <p className="text-xs md:text-sm">© 2025 by Insight Ed</p>
        <p className="text-xs md:text-sm">Powered by <Link to="https://www.risejhansi.in/">RISE Incubator</Link></p>
      </div>
    </footer>
  );
}

export default Footer;
