
import React from "react";


const CarRental = () => {
  return (
    <>
      <div className="car-rental-container">
        <div className="background-text">
          Kashmir <br /> Nirvana
        </div>
        <div className="content">
          <div className="welcome-container">
            <h3 className="welcome-text">Welcome To Kashmir Nirvana</h3>
          </div>
          <h1>
            Rent The Best Quality <br /> Car's With Us
          </h1>
          <p>
            Rent the best quality cars with us and enjoy a hassle-free
            experience. Whether you need a luxury vehicle for a special occasion
            or a reliable car for everyday use, we have the perfect ride for
            you. With affordable rates and flexible rental options, Kashmir
            Nirvana makes car rental easy and convenient. Book your ride today
            and explore with comfort and style!
          </p>
          <div className="buttons">
            <button className="book-btn">Book Your Ride</button>
            <button className="sell-btn">Sell Your Car</button>
          </div>
        </div>

        <div className="car-image">
          <img src="/images/redcar.webp" alt="Car" />
        </div>
      </div>
    </>
  );
};



const WorkingSteps = () => {
  return (
    <div className="working-steps-section">
      <h2>How It Works</h2>
      <h3 className="double-underline">Our Working Steps</h3>
      <div className="underline"></div>
      <div className="steps-container">
        <div className="step">
          <div className="icon">
            <img src="/images/download-2.jpg" alt="Choose Location" />
          </div>
          <h4>Choose Location</h4>
          <p>
            Select the location where you want to pick up the service or
            vehicle.
          </p>
        </div>

        <div className="arrow">
          <img src="/images/arrow1.png" alt="Arrow 1" />
        </div>

        <div className="step">
          <div className="icon">
            <img src="/images/download.png" alt="Pick-Up Date" />
          </div>
          <h4>Pick-Up Date</h4>
          <p>
            Schedule the date when you want to pick up or start using the
            service.
          </p>
        </div>

        <div className="arrow">
          <img src="/images/arrow1.png" alt="Arrow 2" />
        </div>

        <div className="step">
          <div className="icon">
            <img src="/images/watsapp.jpg" alt="Book Your Car" className="logo-red-car"/>
          </div>
          <h4>Book Your Car</h4>
          <p>
            Confirm your reservation by booking the car for the selected
            location and date.
          </p>
        </div>
      </div>
    </div>
  );
};




const RentalDeals = () => {
  return (
    <div className="rental-deals-container">
      <div className="rental-header">
        <img
          src="/images/thar.jpg"
          alt="Rubicon Jeep"
          className="rental-car-img"
        />
        <div className="rental-content">
          <p className="about-us">About Us</p>
          <h2>Feel The Best Experience With Our Rental Deals</h2>
          <p>
            Kashmir Nirvana offers a premium online car rental service,
            providing a seamless experience for travelers looking to explore the
            stunning landscapes of Kashmir. With a diverse fleet of
            well-maintained vehicles ranging from compact cars to luxury SUVs,
            customers can choose the perfect ride for their journey. Whether for
            a day trip or a longer adventure, Kashmir Nirvana ensures affordable
            rates, easy booking, and reliable customer service to make every
            journey memorable and comfortable.
          </p>

          <div className="author-section">
            <p className="author-name">Raqib Yousf</p>
            <div className="award-badge">
              <img src="/images/money_back.webp" alt="30th Anniversary" />
            </div>
          </div>
        </div>
      </div>

      <div className="rental-stats">
        <div className="stat-item">
          <img src="/images/world1.png" alt="Happy Clients" />
          <h3>4784+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <img src="/images/coffee.png" alt="Cup of Coffee" />
          <h3>5174+</h3>
          <p>Cup Of Coffee</p>
        </div>
        <div className="stat-item">
          <img src="/images/rent.png" alt="Car Rented" />
          <h3>7894+</h3>
          <p>Car Rented</p>
        </div>
        <div className="stat-item">
          <img src="/images/happy-clients.webp" alt="World Wide Clients" />
          <h3>9874+</h3>
          <p>World Wide Clients</p>
        </div>
      </div>
    </div>
  );
};




const CarSection = () => {
  return (
    <div className="car-section">
      <h2>Top Rated Rented Cars</h2>
      <p>
        Explore our top-rated rental cars, offering exceptional comfort,
        performance, and value for your journey.
      </p>
      <div className="filter-buttons">
        <button className="filter-btn active">Honda</button>
        <button className="filter-btn">Mahindra</button>
        <button className="filter-btn">Toyota</button>
        <button className="filter-btn">Tata</button>
        <button className="filter-btn">Hyundai</button>
      </div>

      <div className="car-list">
        <div className="car-card">
          <div className="discount-tag">₹ 100</div>
          <img className="car-image" src="/images/nexon.jpg" alt="Nexon" />
          <h3>Tata Nexon XM Petrol variant</h3>
          <p>
            A standard car rental is the step between the intermediate and
            full-size categories
          </p>
          <div className="price-info">
            <span>₹ 3000/Day</span>
            <span>₹ 500/Hour</span>
          </div>
          <div className="fuel-tag">⛽ petrol</div>
          <button className="book-btnn">Book Now 🚗</button>
        </div>

        <div className="car-card">
          <div className="discount-tag">2%</div>
          <img
            className="car-image"
            src="/images/redcar.webp"
            alt=" Hyundai i20"
          />
          <h3> Hyundai i20</h3>
          <p>
            Book Cabs from Kashmir Nirvana Car Rentals for Outstation, Local &
            Airport
          </p>
          <div className="price-info">
            <span>₹ 5000/Day</span>
            <span>₹ 280/Hour</span>
          </div>
          <div className="fuel-tag">⛽ Diesel</div>
          <button className="book-btnn">Book Now 🚗</button>
        </div>

        <div className="car-card">
          <div className="discount-tag">2%</div>
          <img
            className="car-image"
            src="/images/verna1.jpg"
            alt="Hyundai Verna"
          />
          <h3>Hyundai Verna</h3>
          <p>Experience the Ultimate Adventure with Hyundai Verna</p>
          <div className="price-info">
            <span>₹ 7300/Day</span>
            <span>₹ 750/Hour</span>
          </div>
          <div className="fuel-tag">⛽ petrol</div>
          <button className="book-btnn">Book Now 🚗</button>
        </div>

        <div className="car-card">
          <div className="discount-tag">₹ 500</div>
          <img
            className="car-image"
            src="/images/thar.jpg"
            alt="Mahindrar ROXX"
          />
          <h3>Mahindra Thar ROXX</h3>
          <p>
            Mahindra offers the comfort of a mid-size car with an economy price
          </p>
          <div className="price-info">
            <span>₹ 3500/Day</span>
            <span>₹ 450/Hour</span>
          </div>
          <div className="fuel-tag">⛽ petrol</div>
          <button className="book-btnn">Book Now 🚗</button>
        </div>

        <div className="car-card">
          <div className="discount-tag">1%</div>
          <img
            className="car-image"
            src="/images/rubi-white.jpg"
            alt="Jeep Wrangler Rubicon"
          />
          <h3>Jeep Wrangler Rubicon</h3>
          <p>
            Enjoy the luxurious driving experience of a Jeep Wrangler Rubicon
            with advanced features
          </p>
          <div className="price-info">
            <span>₹ 8000/Day</span>
            <span>₹ 1000/Hour</span>
          </div>
          <div className="fuel-tag">⛽ petrol</div>
          <button className="book-btnn">Book Now 🚗</button>
        </div>

        <div className="car-card">
          <div className="discount-tag">5%</div>
          <img
            className="car-image"
            src="/images/fortuner1.jpg"
            alt="Fortuner 4X2 Diesel"
          />
          <h3>Fortuner 4X2 Diesel</h3>
          <p>
            Rent the high-performance Fortuner for an unforgettable driving
            experience
          </p>
          <div className="price-info">
            <span>₹ 9500/Day</span>
            <span>₹ 1200/Hour</span>
          </div>
          <div className="fuel-tag">⛽ Diesel</div>
          <button className="book-btnn">Book Now 🚗</button>
        </div>
      </div>
    </div>
  );
};
















const MainPage = () => {
  return (
    <>
      <CarRental />
      <WorkingSteps />
      <RentalDeals />
      <CarSection />
    </>
  );
};
export default MainPage