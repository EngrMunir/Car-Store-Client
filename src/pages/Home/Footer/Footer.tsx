import { FaCar, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="container px-6 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <h1 className="text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
            Subscribe to our newsletter for the latest car deals & updates!
          </h1>
          <div className="mt-6 md:mt-0 bg-[#fb923c] px-5 py-2 rounded-lg">
            <a
              href="#"
              className="text-white flex items-center gap-x-3 hover:opacity-80"
            >
              <span>Sign Up Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">About Car Shop</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Your trusted online marketplace for buying and selling high-quality
              new and pre-owned cars.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Quick Links</p>
            <div className="flex flex-col mt-2 space-y-2">
              <a href="#" className="text-gray-600 hover:text-[#fb923c]">Home</a>
              <a href="#" className="text-gray-600 hover:text-[#fb923c]">Browse Cars</a>
              <a href="#" className="text-gray-600 hover:text-[#fb923c]">Sell Your Car</a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Our Services</p>
            <div className="flex flex-col mt-2 space-y-2">
              <a href="#" className="text-gray-600 hover:text-[#fb923c]">Car Financing</a>
              <a href="#" className="text-gray-600 hover:text-[#fb923c]">Vehicle Inspection</a>
              <a href="#" className="text-gray-600 hover:text-[#fb923c]">Car Insurance</a>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">Contact Us</p>
            <div className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +880 123 456 789
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> support@carshop.com
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> 123 Car Street, Chattogram, BD
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaCar />
            <p>Car</p>
            <p className="text-[#fb923c]">Shop</p>
          </div>
          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
            © {new Date().getFullYear()} Car Shop. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;