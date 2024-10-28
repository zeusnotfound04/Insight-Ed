import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import successImage from "../assets/ui/3.jpg";
import serviceImage from "../assets/ui/2.jpg";
import salesImage from "../assets/ui/1.jpg";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(0);
  const images = [successImage, serviceImage, salesImage];
  const stageTexts = [
    {
      title: "Unite your customer journey",
      subtitle: "Success",
      description: "Drive successful outcomes. Grow revenue.",
    },
    {
      title: "Unite your customer journey",
      subtitle: "Service",
      description: "World-class service. Convert clients into promoters.",
    },
    {
      title: "Unite your customer journey",
      subtitle: "Sales",
      description: "Streamline your sales process. Sell lasting deals.",
    },
  ];

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom+=1500 top", // Increased scroll length for more duration per stage
        scrub: true,
        pin: true,
      },
    });

    // Move the UI image further to the right
    timeline
      .to(".dashboard-image", { x: "30%", duration: 2 }, 0)
      .to(".left-text", { opacity: 1, duration: 2 }, 0.5);

    // Change images and text, and refill timeline line at each stage
    images.forEach((_, index) => {
      timeline
        .to(containerRef.current, {
          onUpdate: () => setCurrentStage(index),
          duration: 3.5, // Increased duration for each stage to make it stay longer
        }, index + 1)
        .to(".timeline-line", { height: "0%", duration: 0 }, index + 1)
        .to(".timeline-line", { height: "100%", duration: 4 }, index + 1);
    });
  }, []);

  return (
    <div ref={containerRef} className="relative flex min-h-screen items-center justify-center bg-white overflow-hidden">
      {/* Left-side text */}
      <div className="left-text fixed left-20 top-1/2 transform -translate-y-1/2 opacity-0 space-y-4">
        <h2 className="text-2xl font-bold">{stageTexts[currentStage].title}</h2>
        <h3 className="text-xl font-semibold text-purple-500">{stageTexts[currentStage].subtitle}</h3>
        <p className="text-lg">{stageTexts[currentStage].description}</p>
      </div>
      
      {/* Orange timeline on the left side */}
      <div className="fixed left-6 top-1/4 bottom-1/4 h-0 w-2 rounded bg-black timeline-line"></div>

      {/* Dashboard image */}
      <div
        className="dashboard-image w-3/5 h-3/4 bg-cover bg-center rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${images[currentStage]})`,
          transition: "background-image 0.75s ease",
        }}
      ></div>
    </div>
  );
};

export default ScrollAnimation;
