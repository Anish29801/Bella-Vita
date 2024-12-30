import React from 'react';
import { MdPhone } from 'react-icons/md'; // New phone icon
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-[#800000] text-center mb-8 font-inst">Contact Us</h2>
            <p className="text-center text-lg text-gray-700 mb-8">
                We'd love to hear from you! Reach out to us using any of the methods below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Phone Contact */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                    <MdPhone className="text-[#800000] text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600 font-inst mb-2">+91 40770507</p>
                    <a
                        href="tel:+918464825600"
                        className="text-[#800000] font-bold hover:underline"
                    >
                        Call Us
                    </a>
                </div>

                {/* Email Contact */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                    <FaEnvelope className="text-[#800000] text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600 font-inst mb-2">bellaVita@gmail.com</p>
                    <a
                        href="mailto:micro.anish29801@gmail.com"
                        className="text-[#800000] font-bold hover:underline"
                    >
                        Send Email
                    </a>
                </div>

                {/* Address */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                    <FaMapMarkerAlt className="text-[#800000] text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Address</h3>
                    <p className="text-gray-600 font-inst mb-2">Naples,Itlay</p>
                </div>

                {/* WhatsApp Contact */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                    <FaWhatsapp className="text-[#800000] text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-600 font-inst mb-2">+91 40770507</p>
                    <a
                        href="https://wa.me/918464825600"
                        className="text-[#800000] font-bold hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Chat Now
                    </a>
                </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#800000] text-center mb-4 font-inst">Find Us Here</h3>
                <div className="w-full h-64 md:h-96">
                <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119079.09048225266!2d14.187647460496775!3d40.85216001380707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b085c9e6fc175%3A0x400b0c5057f58f1!2sNaples%2C%20Metropolitan%20City%20of%20Naples%2C%20Italy!5e0!3m2!1sen!2sin!4v1695577325502!5m2!1sen!2sin"
                        className="w-full h-full border-0 rounded"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
