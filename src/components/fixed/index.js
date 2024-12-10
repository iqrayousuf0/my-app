import React from "react";
import styles from "./Projects.module.css";

function Proj() {
  // Array of card data (images and texts)
  const cardsData = [
    { imgSrc: "/images/card1.jpg", text: "Business Meeting" },
    { imgSrc: "/images/card2.jpg", text: "Creative Solutions" },
    { imgSrc: "/images/card3.jpg", text: "Explore New Frontiers" },
    // { imgSrc: "/images/card4.jpg", text: "Team Collaboration" },
    // { imgSrc: "/images/card5.jpg", text: "Product Design" },
    // { imgSrc: "/images/card6.jpg", text: "Innovative Ideas" },
    // { imgSrc: "/images/card7.jpg", text: "Client Presentation" },
    // { imgSrc: "/images/card8.jpg", text: "Strategy Planning" },
    // { imgSrc: "/images/card9.jpg", text: "Project Development" },
  ];

  return (
    <div>
      <section className={styles.projects_section}>
        <img
          src="/images/graph.jpg"
          alt="Background"
          className={styles.background_image}
        />
        <div className={styles.overlay}></div>
        <h1 className={styles.section_title}>PROJECTS</h1>
      </section>

      <section className={styles.image_cards_section}>
        {cardsData.map((card, index) => (
          <div key={index} className={styles.image_card}>
            <img
              src={card.imgSrc}
              alt={`Card ${index + 1}`}
              className={styles.card_image}
            />
            <div className={styles.card_text}>{card.text}</div>
            <div className={styles.card_circle}>
              <span className={styles.arrow}>&rarr;</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Proj;
