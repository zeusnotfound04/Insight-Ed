// FAQSection.js
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQSection() {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const faqs = [
    {
      question: "What is Insight Ed?",
      answer: "Insight Ed is a comprehensive ERP software for schools, providing solutions for administrative tasks, student management, and more."
    },
    {
      question: "How can Insight Ed benefit my school?",
      answer: "Insight Ed streamlines school operations, helping staff manage attendance, grades, scheduling, and communications with ease."
    },
    {
      question: "Is training provided for Insight Ed?",
      answer: "Yes, we offer extensive training and support to ensure all staff can fully utilize Insight Ed’s features."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing after the animation is triggered once
        }
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const letters = headingRef.current.children;
      gsap.fromTo(
        letters,
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.1
        }
      );
    }
  }, [isInView]);

  return (
    <div ref={sectionRef} id="faq" className="max-w-2xl mx-auto mt-20 mb-20 pt-20 p-20 space-y-6">
      {/* Animated Heading */}
      <h2
        className="text-3xl font-bold text-center text-gray-800 mb-8 flex justify-center"
        ref={headingRef}
      >
        {"Insight full Queries".split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>

      {/* FAQ Items */}
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));

  const toggleAnswer = () => {
    if (isOpen) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    tl.current = gsap.timeline()
      .fromTo(
        contentRef.current,
        { height: 0, opacity: 0, scale: 0.9 },
        {
          height: "auto",
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.75)"
        }
      );
  }, []);

  return (
    <div className="border-b border-gray-200 overflow-hidden">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAnswer}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      <div ref={contentRef} className="overflow-hidden transition-all">
        <p className="p-4 text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default FAQSection;
