import React from "react";
import Navi from "../components/header"
import images from "../components/slider/images/images";
import styles from "../components/slider/slider.module.css"
import CustomSlider from "../components/slider/customSlider";
import Footer from "@/components/footer";
import Component from "@/components/solutions";
import AboutUs from "@/components/aboutus";

const App = () => {
  return (
    <>
      <Navi />
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      <Component />
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;
