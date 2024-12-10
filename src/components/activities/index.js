import React from "react";
import LandscapeIcon from "@mui/icons-material/Landscape";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/twitter";
import YoutubeIcon from "@mui/icons-material/Youtube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const BackgroundSection = () => {
  return (

    <div className="background-section px-100" >
      <img
        src="/images/download-1.jpg"
        alt="background"
        className="background-image"
      />

      <div className="overlay">
        <button className="experience-text">Feel the Experience</button>
        <h1 className="main-title">
          Thrill Seeker's Paradise: Embrace the Ultimate Adventure
        </h1>


        
        <button className="started-button">Get Started</button>
        <div className="description-container">
          <LandscapeIcon className="landscape-icon" />
          <p className="description">
            Get ready to push your limits and make unforgettable memories.
          </p>

          <LandscapeIcon className="landscape-icon" />
          <p className="description">
            For those who crave adventure, our activities<br></br> are crafted
            to test your limits and awaken your spirit.
          </p>

          <div className="icons-container">
            <FacebookIcon className="social-icon" />
            <InstagramIcon className="social-icon" />
            <TwitterIcon className="social-icon" />
            <YoutubeIcon className="social-icon" />
            <LinkedInIcon className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
