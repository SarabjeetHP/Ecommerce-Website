import React from "react";
import Image from "../../assets/image.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";

import ContactAndReturnPolicy from "./ContactInfo";
const Header: React.FC = () => {
  return (
    <>
      <div className="relative bg-black text-white py-8 px-4 md:px-16 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            YOUR PARTNER IN EVERY STEP OF YOUR FASHION JOURNEY.
          </h1>
          <p className="text-sm md:text-base text-gray-400">
            24/7 Assistance for Seamless Shopping and Unmatched Customer
            Satisfaction.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-[url('/project/src/assets/image.png')] bg-no-repeat bg-contain">
            <img src={Image.src}></img>
          </div>
        </div>
      </div>
      <ContactAndReturnPolicy />
      <div className="relative bg-black text-white py-8 px-4 md:px-16 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            THE STYLELOOM TESTIMONIAL COLLECTION.
          </h1>
          <p className="text-sm md:text-base text-gray-400">
            At styloom our customers are the heartbeat of our brand.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-[url('/project/src/assets/image.png')] bg-no-repeat bg-contain">
            <img src={Image2.src}></img>
          </div>
        </div>
      </div>
      {/* Testimonial Here */}
      <div className="relative bg-black text-white py-8 px-4 md:px-16 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            HAVE QUESTIONS? WE HAVE ANSWERS
          </h1>
          <p className="text-sm md:text-base text-gray-400">
            Ease into the world of styloom clarit. Our FAQ cover a spectrum of
            topics.
          </p>
          <div className="gap-4">
            <button>All</button>
            <button>Ordering</button>
            <button>Shipping</button>
            <button>Returns</button>
            <button>Support</button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-[url('/project/src/assets/image.png')] bg-no-repeat bg-contain">
            <img src={Image3.src}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
