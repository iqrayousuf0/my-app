import React from "react";
import styles from "./cardD.module.css"


function CardsData() {
  
  
  const cardsData = [
    { imgSrc: "/images/card1.jpg", text: "Business Meeting" },
    { imgSrc: "/images/card2.jpg", text: "Creative Solutions" },
    { imgSrc: "/images/card3.jpg", text: "Explore New Frontiers" },
    { imgSrc: "/images/cad5.jpg", text: "Team Collaboration" },
    { imgSrc: "/images/cad6.jpg", text: "Product Design" },
    { imgSrc: "/images/cad4.jpg", text: "Innovative Ideas" },
     { imgSrc: "/images/cad13.jpg", text: "Client Presentation" },
    { imgSrc: "/images/cad14.jpg", text: "Strategy Planning" },
     { imgSrc: "/images/cad15.jpg", text: "Project Development" },
  ];

  return (
    <div>
    
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

export default CardsData;
