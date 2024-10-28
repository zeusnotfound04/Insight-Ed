import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ParticlesContainer from './Particle';
import "./Hero.css"


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
      },
    });

    tl.to(heroRef.current, {
      scale: 0.8,
      opacity: 0.7,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div ref={heroRef} className="min-h-screen w-full flex items-center justify-center bg-black relative rounded-lg overflow-hidden">
        {/* Particles in the background */}
        <ParticlesContainer />

        {/* Content in the foreground */}
        <div ref={contentRef} className="relative z-20 text-center text-white flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl sm:text-5xl md:text-6xl tagline-gradient font-semibold  mb-4">Smart ERP for Smart Schools</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">Simplifying Education Management</p>
          <div className="space-x-4">
            
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Demo
              </span>
            </button>
            
            
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold">
            Learn more →
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
