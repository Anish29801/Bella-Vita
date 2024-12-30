import React, { useState } from 'react';
import su1 from "../assets/su1.jpg";
import su2 from "../assets/su2.jpg";
import su3 from "../assets/su3.jpg";
import su4 from "../assets/su4.avif";

// Data for the different suites
const suitesData = [
    {
        id: 3,
        image: su3,
        title: 'Family Suite',
        description: 'Spacious and cozy, our family suites are great for your loved ones.',
        price: '$200 per night',
    },
    {
        id: 1,
        image: su1, // Replaced with local image path
        title: 'Deluxe Suite',
        description: 'Experience luxury in our deluxe suites, perfect for relaxation.',
        price: '$250 per night',
    },
    {
        id: 2,
        image: su2,
        title: 'Executive Suite',
        description: 'Designed for business and comfort, our executive suites are ideal.',
        price: '$300 per night',
    },
    {
        id: 4,
        image: su4,
        title: 'Presidential Suite',
        description: 'Indulge in the ultimate luxury experience in our presidential suites.',
        price: '$500 per night',
    },
];

// Modal component to show more details and book
const BookingModal = ({ suite, closeModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
                <h3 className="text-2xl font-semibold text-[#800000] mb-4">{suite.title}</h3>
                <img src={suite.image} alt={suite.title} className="w-full h-48 object-cover mb-4" />
                <p className="text-gray-600 mb-4 font-ral">{suite.description}</p>
                <p className="text-gray-800 font-bold mb-4">{suite.price}</p>
                <div className="flex justify-end">
                    <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

// Main Suites component
const Suites = () => {
    const [selectedSuite, setSelectedSuite] = useState(null);

    const openModal = (suite) => {
        setSelectedSuite(suite);
    };

    const closeModal = () => {
        setSelectedSuite(null);
    };

    return (
        <div className="p-8 bg-gray-100">
            <h2 className="text-3xl font-inst text-[#800000] font-bold text-center mb-8">Our Suites</h2>
            <p className="text-center text-lg text-gray-700 mb-8 font-ral">
                Explore a range of luxurious suites tailored to meet your every need. Whether you're here for business, relaxation, or a family vacation, we have the perfect suite for you.
            </p>

            {/* Grid Layout for displaying the suites */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {suitesData.map((suite) => (
                    <div
                        key={suite.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
                    >
                        <img src={suite.image} alt={suite.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2 font-inst text-[#800000]">{suite.title}</h3>
                            <p className="text-gray-600 mb-4 font-ral">{suite.description}</p>
                            <p className="text-red-800 font-bold mb-4">{suite.price}</p>
                            <button
                                onClick={() => openModal(suite)}
                                className="bg-[#800000d1] text-white py-2 px-4 rounded hover:bg-[#800000] transition"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for booking the selected suite */}
            {selectedSuite && <BookingModal suite={selectedSuite} closeModal={closeModal} />}

            {/* Additional information section */}
            <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-[#800000] mb-4 font-inst">Why Choose Our Suites?</h3>
                <p className="text-gray-700 text-lg font-ral">
                    Our suites are designed to provide unmatched comfort, luxury, and convenience. With modern amenities, exquisite decor, and top-notch service, we ensure a memorable stay for all our guests.
                </p>
            </div>
        </div>
    );
};

export default Suites;
