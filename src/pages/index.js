import React from "react";
import Navi from "../components/header"
import images from "../components/slider/images/images";
import styles from "../components/slider/slider.module.css"
import CustomSlider from "../components/slider/customSlider";
import Footer from "@/components/footer";
import Component from "@/components/solutions";
import AboutUs from "@/components/aboutus";
import CardsData from "./projects/cardData/cardsData.js";
import FAQs from "@/components/faqshome";
import WhyChooseUs from "@/components/choose";
import  Banner from "@/components/plan";
import News from "@/components/news";
import Map from "@/components/hello";
const App = () => {
 

  return (
    <>
      {/* <Navi /> */}
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      <Component />
      <AboutUs />
      <CardsData />
      <FAQs />
      <WhyChooseUs />
      < Banner />
      <News />
      <Map />
      
    </>
  );
};

export default App;
