import React from "react";
import Navi from "../components/header"
import images from "../components/slider/images/images";
import styles from "../components/slider/slider.module.css"
import CustomSlider from "../components/slider/customSlider";


const App = () => {
  return (
    <>
      <Navi />
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
    
    </>
  );
};

export default App;
