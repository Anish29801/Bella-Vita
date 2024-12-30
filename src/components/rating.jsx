import google from "../assets/g.webp";
import ms from "../assets/ms.png";
import star from "../assets/star.svg";

const RatingStars = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {Array(filledStars)
        .fill(0)
        .map((_, idx) => (
          <img key={`filled-${idx}`} src={star} alt="Star" className="w-5 h-5" />
        ))}
      {halfStar && (
        <img src={star} alt="Half Star" className="w-5 h-5 opacity-50" />
      )}
      {Array(emptyStars)
        .fill(0)
        .map((_, idx) => (
          <img key={`empty-${idx}`} src={star} alt="Empty Star" className="w-5 h-5 opacity-25" />
        ))}
    </div>
  );
};

const Rating = () => {
  return (
    <div>
      <div className="bg-[#f4f4f4] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#800000] text-4xl font-inst italic font-bold mb-6">
              Our Customers Love Us
            </h2>
            <p className="text-lg font-inter">
              Discover what our customers say about us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center space-x-4">
              <img src={ms} alt="Microsoft" className="w-16" />
              <div>
                <h3 className="text-2xl font-ral font-bold">Michelin</h3>
                <RatingStars rating={4.9} />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
                
              <img src={google} alt="Google" className="w-16" />
              <div>
                <h3 className="text-2xl font-ral font-bold">Google</h3>
                <RatingStars rating={4.8} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
