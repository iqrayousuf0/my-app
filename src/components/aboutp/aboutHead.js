import React from "react";
import styles from "./aboutHead.module.css";


function Head() {
  return (
    <div>
      <section className={styles.projects_section}>
        <img
          src="/images/project1.jpg"
          alt="Background"
          className={styles.background_image}
        />
        <div className={styles.overlay}></div>
        <h1 className={styles.section_title}>ABOUT</h1>
      </section>

    
    </div>
  );
}

export default Head;
