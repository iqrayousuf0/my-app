import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Legal Representation:</h4>
          <p>Top Floor Al Burj Complex, New Colony Pulwama, Kashmir, 192301</p>
          <h4>Support</h4>
          <p>8899382522</p>
          <p>kashmirnirvana23@gmail.com</p>
        </div>
        <div className="footer-column">
          <h4>Kashmir Nirvana Special</h4>
          <ul>
            <Link href="/rental-cars" className="rental-cars">
              Book a cab
            </Link>
            <p>Destinations</p>
            <Link href="/delete-account" className="delete-account">
              delete account
            </Link>
            <p>Activities</p>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <p>About us</p>
            <p>Contact Us</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policies</p>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <img
          src="/images/footer_logo.webp"
          alt="Kashmir Nirvana Logo"
          className="footer-logo"
        />
        <p>&copy; 2024 KashmirNirvana.com All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
