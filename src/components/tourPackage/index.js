
import React from "react";


const TourPackages = () => {
  return (
    <div className="tour-packages px-100">
      <div className="left-image-container">
        <img
          src="/images/dessert.webp"
          alt="Off-Road Jeep Safaris "
          className="left-image"
        />
        <div className="left-card-content">
          <p className="card-title">Off-Road Jeep Safaris</p>
        </div>
      </div>

      <div className="tour-content">
        <h2 className="tour-title">
          Explore the Best Kashmir Tour Packages 2025
        </h2>
        <p className="tour-subtitle">
          Man cannot discover new oceans unless he has the courage to lose sight
          of the shoreline.
        </p>
        <div className="package-cards">
          <div className="card">
            <img
              src="/images/gandola.webp"
              alt="Gondola Ride"
              className="card-image"
            />
            <div className="card-content">
              <p className="card-title">Gondola Ride</p>
            </div>
          </div>
          <div className="card">
            <img
              src="/images/truck.webp"
              alt="Adventure Travel"
              className="card-image"
            />
            <div className="card-content">
              <p className="card-title">Adventure Travel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;