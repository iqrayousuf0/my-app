import React from "react";
import styles from "./hello.module.css";

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <img
        src="/images/map.jpg"
        alt="Map background"
        className={styles.backgroundImage}
      />
      <div className={styles.backgroundOverlay}></div> 
      <div className={styles.content}>
        <h2 className={styles.title}>New York</h2>
        <div className={styles.locationLogo}>
          {/* <img
            src="/images/logo99.jpg" // Replace with your location logo path
            alt="Location Logo"
            className={styles.logo}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Map;
