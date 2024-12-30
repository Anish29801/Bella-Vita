import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import Background from "../assets/Background.jpg"; // Correctly imported the image asset

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between animations of children
      },
    },
  };

  return (
    <div>
      <div
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Background})`, // Dynamic import for the image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#800000] bg-opacity-40"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-white px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer} // Stagger animations for children
        >
          <motion.h1
            className="text-5xl font-inst italic font-bold mb-6"
            variants={fadeIn} // Fade-in animation for heading
          >
            Vivi l'Eleganza di Bella Vita
          </motion.h1>
          <motion.p
            className="text-lg font-inter mb-8"
            variants={slideUp} // Slide-up animation for paragraph
          >
            Immergiti nel lusso, nella cucina raffinata e nella bellezza senza
            tempo
          </motion.p>
          <motion.div
            className="flex space-x-4 justify-center"
            variants={slideUp} // Slide-up animation for buttons
          >
            <button
              className="px-6 py-3 rounded-2xl bg-[#a52a2a] hover:bg-[#993333] text-white font-bold transition"
              onClick={() => navigate("/history")} // Navigate to /history
            >
              Learn More
            </button>
            <button
              className="px-6 py-3 bg-transparent border-2 rounded-2xl border-white hover:bg-[#a52a2a] text-white font-bold transition"
              onClick={() => navigate("/suites")} // Navigate to /suites
            >
              Book Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
