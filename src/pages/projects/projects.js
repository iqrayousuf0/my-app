import React from "react";
import styles from "@/styles/projects.module.css";

import CardsData from "./cardData/cardsData";

function Project() {

  return (
    <div>
      <section className={styles.projects_section}>
        <img
          src="/images/project1.jpg"
          alt="Background"
          className={styles.background_image}
        />
        <div className={styles.overlay}></div>
        <h1 className={styles.section_title}>PROJECTS</h1>
      </section>
    
      <CardsData />
    
    </div>
  );
}

export default Project;
