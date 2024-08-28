import React from "react";
import Phone from "@/assets/Phone.png";
import Location from "@/assets/Location.png";
import Email from "@/assets/Email.png";
import Eligibility from "@/assets/Eligibility.png";
import Process from "@/assets/Process.png";
import Refund from "@/assets/Refund.png";
import Cancel from "@/assets/Cancel.png";
import CancelP from "@/assets/cancelP.png";
import RefundT from "@/assets/RefundTimeLine.png";

const ContactAndReturnPolicy: React.FC = () => {
  return (
    <>
      <div className="bg-black text-white p-8">
        {/* Contact Information */}
        <div className="mb-8">
          <h1 className="text-3xl  mb-8">Contact Information</h1>
          <div className=" grid grid-cols-1 items-center sm:grid-cols-3 gap-4">
            <div className="border-dotted border-2 center item-center border-gray-600 p-8  space-x-4">
              <img
                className="ml-10 mb-20 space-x-12 mt-20 block h-20"
                src={Email.src}
                alt=""
              />
              <div>
                <p className="ml-20 mb-10 text-xl font-medium">Email</p>
                <a href="mailto:support@StyleLoom.com" className="text-lg">
                  support@StyleLoom.com
                </a>
              </div>
            </div>
            <div className="border-dotted border-2 center item-center border-gray-600 p-8  space-x-4">
              <img
                className="mr- mb-20 item-center space-x-12 mt-20 block h-20"
                src={Phone.src}
              ></img>
              <div className="item-center">
                <p className="text-sm font-medium">Phone</p>
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="border-dotted border-2 border-gray-600 p-8 items-center space-x-4">
              <img
                className="ml-10 mb-20 space-x-12 mt-20 block h-20"
                src={Location.src}
              ></img>
              <div>
                <p className="text-sm font-medium">Location</p>
                <button className="text-lg underline">Get Direction</button>
              </div>
            </div>
          </div>
        </div>

        {/* Return Policy */}
        <div>
          <h2 className="text-3xl  mb-10">Return Policy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <img
                className="ml-10 mb-20 space-x-12 mt-20 block h-20"
                src={Eligibility.src}
              ></img>
              <div>
                <p className="text-large font-medium">Eligibility</p>
                <p className="text-sm">
                  Items must be unused, with tags attached, and returned within
                  30 days of delivery.
                </p>
              </div>
            </div>
            <div className="flex text-xl items-center space-x-4">
              <img
                className="ml-10 mb-20 space-x-12 mt-20 block h-20"
                src={Process.src}
              ></img>
              <div>
                <p className="text-sm font-medium">Process</p>
                <p className="text-lg">
                  Initiate returns through our Return Center for a smooth and
                  efficient process.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src={Refund.src}
                className="ml-10 mb-20 space-x-12 mt-20 block h-20"
              ></img>
              <div>
                <p className="text-sm font-medium">Refund</p>
                <p className="text-lg">
                  Expect a refund to your original payment method within 7-10
                  business days.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="text-lg underline">Read Return Policy</button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-8">
        {/* Cancellation Policy */}
        <div className="">
          <h2 className="text-3xl  mb-10">Cancellation Policy</h2>
          <div className="mt-6">
            <button className="text-lg underline">
              Read Cancellation Policy
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <img
                className="ml-10 mb-20 space-x-12 mt-20 block h-20"
                src={Cancel.src}
              ></img>
              <div>
                <p className="text-sm font-medium">Cancellation Window</p>
                <p className="text-lg">
                  Orders can be canceled within 24 hours of placement for a full
                  refund.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                className="ml-10 mb-20 space-x-12 mt-20 block h-20"
                src={CancelP.src}
              ></img>
              <div>
                <p className="text-sm font-medium">Cancellation Process</p>
                <p className="text-lg">
                  Visit our Order Management section to cancel your order
                  effortlessly.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                className="ml-10 mb-20 space-x-12 mt-20 block h-20"
                src={RefundT.src}
              ></img>
              <div>
                <p className="text-sm font-medium">Refund Timeline</p>
                <p className="text-lg">
                  Refunds for canceled orders are processed within 5-7 business
                  days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAndReturnPolicy;
