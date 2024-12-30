import { motion } from "framer-motion"; // Import Framer Motion
import a from "../assets/a1.jpg"; // Correctly imported the image asset
import lady from "../assets/lady.avif"; // Correctly imported the image asset
import foodImage from "../assets/c.jpeg"; // Correctly imported the image asset

const HistoryCards = () => {
  // Framer Motion Variants for animations
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="mt-9">
      <div className="m-4">
        {/* Our Legacy Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-[#800000] font-inst italic">
            Our Legacy
          </h2>
          <p className="text-[#800000] text-xl mt-2 font-inter">
            A Tradition of Excellence and Timeless Elegance
          </p>
        </motion.div>

        {/* Card 1 */}
        <div className="flex items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeft}
            className="w-1/3"
          >
            <img
              src={a}
              alt="Bella Vita Hotel"
              className="w-full rounded-lg filter sepia opacity-80"
              style={{ filter: "sepia(100%) contrast(80%) brightness(70%)" }}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRight}
            className="w-2/3 bg-white p-4 rounded-lg"
          >
            <h3 className="text-[#800000] text-2xl font-bold mt-4 font-inst italic">
              Bella Vita Hotel
            </h3>
            <p className="text-[#800000] mt-2 font-inter">
              Established in 1925, the Bella Vita Hotel has been a cornerstone
              of luxury and comfort in the heart of the city. Originally a
              family estate, it transformed into a boutique hotel, offering
              guests a blend of historic charm and modern elegance. Renowned
              for its world-class dining and impeccable service, Bella Vita
              continues to be a symbol of timeless hospitality.
            </p>
          </motion.div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-row-reverse items-center mt-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRight}
            className="w-1/3"
          >
            <img
              src={lady}
              alt="Bella Vita Hotel"
              className="w-full rounded-lg"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeft}
            className="w-2/3 bg-white p-4 rounded-lg"
          >
            <h3 className="text-[#800000] text-2xl font-bold mt-4 font-inst italic">
              A Legacy of Timeless Elegance
            </h3>
            <p className="text-[#800000] mt-2 font-inter">
              Step into a world of timeless beauty at the Bella Vita Hotel.
              Since 1925, we have embraced luxury and elegance, creating an
              atmosphere where every detail reflects beauty and grace. Our
              charming blend of historic architecture with modern luxury ensures
              a unique experience for every guest.
            </p>
          </motion.div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center mt-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromLeft}
            className="w-1/3"
          >
            <img
              src={foodImage}
              alt="Bella Vita Dining"
              className="w-full rounded-lg"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInFromRight}
            className="w-2/3 bg-white p-4 rounded-lg"
          >
            <h3 className="text-[#800000] text-3xl font-bold mt-4 font-inst italic">
              A Culinary Journey of Taste and Elegance
            </h3>
            <p className="text-[#800000] mt-2 font-inter">
              At Bella Vita, dining is not just a meal, it’s an experience. Our
              chefs curate exquisite dishes using the finest ingredients to
              offer a true culinary journey. From gourmet fine dining to
              delightful casual meals, each dish tells a story of passion,
              tradition, and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCards;
