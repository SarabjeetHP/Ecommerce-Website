import React from "react";
import img1 from "../../../assets/bg1.png"; // Background image
import icon from "../../../assets/Icon.png"
import shape from "../../../assets/Shape.png"
import { testimonials } from "./data";

const Testimonial = () => {
  return (
    <section className="bg-black text-white py-12 relative">
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 opacity-100 "
       
      />
      <div className="bg-black bg-opacity-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-roboto text-3xl sm:text-4xl lg:text-4xl font-medium leading-tight mb-4">
            THE STYLELOOM TESTIMONIAL COLLECTION.
          </h2>
          <p className="text-left mb-12 font-roboto text-lg sm:text-[8px] lg:text-2xl ">
            At StyleLoom, our customers are the heartbeat of our brand.
          </p>

          <img
            src={img1.src}
            
            alt="image"
            className="w-40 h-40 sm:w-56 sm:h-56  absolute right-0 top-0 "
           
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-opacity-80 p-6 shadow-lg flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex justify-stretch">
                  <div className="w-56">
                    <h4 className="text-lg sm:text-xl font-semibold">{testimonial.name}</h4>
                    <p className="text-sm sm:text-base">{testimonial.location}</p>
                  </div>
                  <a href="#">
                    <img src={icon.src} className="w-8 h-18" />
                  </a>
                </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                   <img key={i} src={shape.src} alt="" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-400">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
