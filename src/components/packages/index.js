import React from "react";


const KashmirPackages = () => {
  return (
    <div className="package-container px-100">
      <div className="package-image">
        <img src="/images/remove-back.webp" alt="Kashmir Nirvan" />
      </div>
      <div className="package-content">
        <h2>Affordable Packages in Kashmir for 2025 </h2>
        <p>
          Experience the beauty of Kashmir risk-free.
          <br />
          If you're not satisfied, we'll refund your money, no questions asked!
          <br />
          Book your dream trip now!
        </p>

        <div className="booking-options">
          <div className="ist-column">
            <p>Flight Booking</p>
            <p>Hotel Booking</p>
          </div>
          <div className="sec-column">
            <p>Airport Transfer</p>
            <p>Sight Seeing</p>
          </div>
        </div>
        <button className="custom-package">Book your customized package</button>
      </div>
    </div>
  );
};

export default KashmirPackages;
