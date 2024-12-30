import React from "react";
import s1 from "../assets/s1.jpg";
import n from "../assets/n.jpg";
import h from "../assets/h.jpg";

const HotelHistory = () => {
  const images = [
    {
      src: s1,
      alt: "Prince of Wales Hotel with a trolley in front",
    },
    {
      src: n,
      alt: "Framed portrait of a historical figure",
    },
    {
      src: h,
      alt: "Prince of Wales Hotel illuminated at night with Christmas decorations",
    },
  ];

  return (
    <div className="font-sans leading-relaxed m-5">
      <h1 className="text-4xl font-bold text-[#800000] font-inst italic text-center">Our History</h1>

      <section className="mb-10">
        <p className="text-[#800000] text-xl mt-4 font-inter">
          Nestled in the picturesque hills of Tuscany, Hotel Bella Vita opened its doors in the
          spring of 1925, during a period of cultural resurgence in post-World War I Italy. Built by
          the visionary architect Giovanni Moretti, the hotel was designed as a luxurious retreat
          for Italy's elite and international travelers alike.
        </p>
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="w-full max-w-2xl mx-auto mt-5 rounded-lg grayscale sepia shadow-lg transform transition-transform duration-500 hover:scale-105"
        />
      </section>

      <section className="mb-10">
        <p className="text-[#800000] text-xl mt-4 font-inter">
          From its inception, Hotel Bella Vita embodied the elegance of the early 20th century. The
          hotel’s architecture combined neoclassical and Art Deco styles, reflecting the
          sophistication of the era. High vaulted ceilings, intricate frescoes, and hand-carved
          marble columns greeted guests in the grand lobby. The 40 guest rooms were lavishly
          furnished with fine Italian fabrics, hand-crafted furniture, and modern amenities,
          including hot running water—a rare luxury at the time.
        </p>
        <img
          src={images[1].src}
          alt={images[1].alt}
          className="w-full max-w-xl mx-auto mt-5 rounded-lg grayscale sepia shadow-lg transform transition-transform duration-500 hover:scale-105"
        />
      </section>

      <section className="mb-10">
        <h2 className="text-4xl font-bold text-[#800000] font-inst italic">A Haven for the Elite</h2>
        <p className="text-[#800000] text-xl mt-4 font-inter">
          In its early years, Hotel Bella Vita quickly became a hub for the cultural elite. Renowned
          artists, musicians, and writers of the 1920s were frequent guests, drawn by the hotel's
          serene surroundings and its proximity to Florence and Siena. The hotel also hosted
          glamorous soirées and gala dinners in its opulent ballroom, featuring live performances by
          some of Italy’s most celebrated musicians.
        </p>
        <img
          src={images[2].src}
          alt={images[2].alt}
          className="w-full max-w-2xl mx-auto mt-5 rounded-lg grayscale sepia shadow-lg transform transition-transform duration-500 hover:scale-105"
        />
      </section>

      <section>
        <h2 className="text-4xl font-bold text-[#800000] font-inst italic">Legacy and Revival</h2>
        <p className="text-[#800000] text-xl mt-4 font-inter">
          By the mid-20th century, Hotel Bella Vita had solidified its reputation as a cornerstone
          of Italian hospitality. Renovations in the 1950s and 1970s introduced modern comforts
          while preserving the hotel's historical charm.
        <br />
          Today, nearly a century after its founding, Hotel Bella Vita continues to welcome guests
          from around the world, offering a blend of historical splendor and contemporary luxury. It
          remains a testament to Italy’s enduring legacy of art, culture, and hospitality.
        </p>
      </section>
    </div>
  );
};

export default HotelHistory;
