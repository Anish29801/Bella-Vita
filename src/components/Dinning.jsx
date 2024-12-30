import React from "react";
import breakfast from "../assets/b.jpeg";
import lunch from "../assets/l.webp";
import dinner from "../assets/di.jpg";
import desserts from "../assets/de.jpg";
import hero from "../assets/i.avif";

const Dining = () => {
  const diningOptions = [
    {
      img: breakfast,
      title: "Breakfast",
      timing: "7:00 AM - 10:30 AM",
      description:
        "Start your day with a delightful array of freshly baked pastries, seasonal fruits, and made-to-order omelets. Our breakfast buffet features locally sourced ingredients and daily specialties, including freshly squeezed juices and artisanal coffee.",
    },
    {
      img: lunch,
      title: "Lunch",
      timing: "12:00 PM - 3:00 PM",
      description:
        "Savor a curated menu of Italian classics, including handmade pasta, wood-fired pizzas, and farm-fresh salads. Enjoy your meal with a stunning view of the Tuscan countryside, complemented by a selection of fine wines from our cellar.",
    },
    {
      img: dinner,
      title: "Dinner",
      timing: "6:30 PM - 10:00 PM",
      description:
        "Experience an elegant dining affair featuring gourmet dishes crafted by our renowned chefs. From rich risottos to perfectly grilled meats, each plate is a celebration of Italian culinary artistry. Pair your meal with sommelier-recommended wines for an unforgettable evening.",
    },
    {
      img: desserts,
      title: "Dessert",
      timing: "Available All Day",
      description:
        "Indulge your sweet tooth with decadent desserts, including our signature Tiramisu, creamy Panna Cotta, and an assortment of homemade gelato. Each dessert is a perfect blend of flavor and presentation, crafted to delight your senses.",
    },
  ];

  return (
    <div className="p-5">
      {/* Hero Image Section */}
      <div className="relative w-full h-[400px] mb-8">
        <img
          src={hero}
          alt="Hotel Bella Vita Dining"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white font-inst italic">
            Dining at Hotel Bella Vita
          </h1>
        </div>
      </div>

      {/* Introduction */}
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
        At Hotel Bella Vita, we believe dining is not just about food but also about creating
        unforgettable experiences. From the first light of day to the late hours of the night, our
        dining options offer a culinary journey through the finest Italian traditions and
        contemporary innovations.
      </p>

      {/* Dining Options */}
      <div className="space-y-10">
        {diningOptions.map((option, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={option.img}
              alt={option.title}
              className="w-full lg:w-1/2 h-60 object-cover"
            />
            <div className="p-5 lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#800000] font-inst mb-3">{option.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{option.timing}</p>
              <p className="text-gray-700">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dining;
