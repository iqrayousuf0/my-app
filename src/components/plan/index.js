import React from "react";
import styles from "./plan.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <img
        src="/images/plan.jpg"
        alt="Background"
        className={styles.backgroundImage}
      />
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>
        Our business plan consultants have real world experience
      </h1>
    </div>
  );
}

export default Banner;
