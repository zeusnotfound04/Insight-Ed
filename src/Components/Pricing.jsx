import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const PricingCards = () => {
  const pricingData = [
    {
      id: 1,
      title: "Pay as You Go",
      subtitle: "Based on # of extractions",
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "Per User",
      subtitle: "Unlimited extractions per user",
      buttonText: "Get Started",
      period: "/year",
    },
    {
      id: 3,
      title: "Custom",
      subtitle: "For enterprises",
      buttonText: "Get Started",
    },
  ];

  return (
    <section id="pricing" className="flex justify-center items-center w-full h-full flex-wrap p-4 max-w-screen-lg mx-auto pt-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 w-full text-black">Pricing</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {pricingData.map((card) => (
          <div
            key={card.id}
            className="card-wrapper mx-auto w-full"
          >
            <div
              className="price-card p-8 rounded-xl border border-gray-300 shadow-lg transition-all hover:shadow-xl bg-black text-white"
            >
             
              <div className="price-card__title text-3xl font-bold">
                {card.title}
                {card.period && (
                  <span className="text-lg font-normal text-gray-400"> {card.period}</span>
                )}
              </div>

              
              <div className="price-card__subtitle mt-4 flex items-center space-x-2 text-sm text-gray-300">
                <IoCheckmarkDoneCircleSharp className="text-green-500" />
                <span>{card.subtitle}</span>
              </div>

              
              <button
                className="price-card__button bg-white text-black text-lg font-medium py-3 px-8 rounded-full shadow-md mt-6"
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      
      <p className="text-gray-600 text-center mt-8 text-lg">
        * with a one-time Onboarding Fee
      </p>
    </section>
  );
};

export default PricingCards;
