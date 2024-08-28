import React from "react";

const ContactAndReturnPolicy: React.FC = () => {
  return (
    <>
      <div className="bg-black text-white p-8">
        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">&#9993;</span>
              <div>
                <p className="text-sm font-medium">Email</p>
                <a href="mailto:support@StyleLoom.com" className="text-lg">
                  support@StyleLoom.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">&#9742;</span>
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">&#128205;</span>
              <div>
                <p className="text-sm font-medium">Location</p>
                <button className="text-lg underline">Get Direction</button>
              </div>
            </div>
          </div>
        </div>

        {/* Return Policy */}
        <div>
          <h2 className="text-xl font-bold mb-4">Return Policy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">&#10004;</span>
              <div>
                <p className="text-sm font-medium">Eligibility</p>
                <p className="text-lg">
                  Items must be unused, with tags attached, and returned within
                  30 days of delivery.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">&#9881;</span>
              <div>
                <p className="text-sm font-medium">Process</p>
                <p className="text-lg">
                  Initiate returns through our Return Center for a smooth and
                  efficient process.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">&#128179;</span>
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
          <h2 className="text-xl font-bold mb-4">Cancellation Policy</h2>
          <div className="mt-6">
            <button className="text-lg underline">
              Read Cancellation Policy
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">&#9203;</span>
              <div>
                <p className="text-sm font-medium">Cancellation Window</p>
                <p className="text-lg">
                  Orders can be canceled within 24 hours of placement for a full
                  refund.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">&#10060;</span>
              <div>
                <p className="text-sm font-medium">Cancellation Process</p>
                <p className="text-lg">
                  Visit our Order Management section to cancel your order
                  effortlessly.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">&#128179;</span>
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
