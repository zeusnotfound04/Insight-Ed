import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import successImage from "../assets/ui/3.png";
import serviceImage from "../assets/ui/2.png";
import salesImage from "../assets/ui/1.png";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const [currentStage, setCurrentStage] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
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
    // GSAP scroll-triggered animations for desktop view
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom+=1500 top",
        scrub: true,
        pin: true,
      },
    });

    timeline
      .to(".dashboard-image", { x: "30%", duration: 2 }, 0)
      .to(".left-text", { opacity: 1, duration: 2 }, 0.5);

    images.forEach((_, index) => {
      timeline
        .to(containerRef.current, {
          onUpdate: () => setCurrentStage(index),
          duration: 3.5,
        }, index + 1)
        .to(".timeline-line", { height: "0%", duration: 0 }, index + 1)
        .to(".timeline-line", { height: "100%", duration: 4 }, index + 1);
    });
  }, []);

  // Auto-scrolling carousel for mobile view
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative flex min-h-screen items-center justify-center bg-white overflow-hidden" id="explore" >
      {/* Left-side text */}
      <div className="left-text fixed left-20 top-1/2 transform -translate-y-1/2 opacity-0 space-y-4 hidden md:block">
        <h2 className="text-4xl font-bold">{stageTexts[currentStage].title}</h2>
        <h3 className="text-2xl font-semibold text-purple-500">{stageTexts[currentStage].subtitle}</h3>
        <p className="text-xl">{stageTexts[currentStage].description}</p>
      </div>
      
      {/* Orange timeline on the left side */}
      <div className="fixed left-6 top-1/4 bottom-1/4 h-0 w-2 rounded bg-black timeline-line hidden md:block"></div>

      {/* Carousel for mobile view */}
      <div className="block md:hidden w-full text-center space-y-4 p-4">
        <div
          className="w-full h-48 bg-cover bg-center rounded-lg shadow-lg mx-auto"
          style={{
            backgroundImage: `url(${images[carouselIndex]})`,
            transition: "background-image 0.75s ease",
          }}
        ></div>
        <h2 className="text-xl font-bold">{stageTexts[carouselIndex].title}</h2>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">Book a demo</button>
        <div>
          <h3 className="text-lg font-semibold">{stageTexts[carouselIndex].subtitle}</h3>
          <p className="text-sm">{stageTexts[carouselIndex].description}</p>
        </div>
      </div>

      {/* Dashboard image for desktop */}
      <div
        className="dashboard-image w-3/5 h-3/4 bg-cover bg-center rounded-lg shadow-lg hidden md:block"
        style={{
          backgroundImage: `url(${images[currentStage]})`,
          transition: "background-image 0.75s ease",
        }}
      ></div>
    </div>
  );
};

export default ScrollAnimation;
