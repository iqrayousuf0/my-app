import React from "react";
import styles from "./choose.module.css";

function WhyChooseUs() {
  const items = [
    {
      logo: "/images/5.png",
      subtitle: "Best Strategy",
      description:
        "The Love Boat soon will be making another run explore strange tools enter new worlds.",
    },
    {
      logo: "/images/6.png",
      subtitle: "High-Quality Services",
      description:
        "The Love Boat soon will be making another run explore strange tools enter new worlds.",
    },
    {
      logo: "/images/7.png",
      subtitle: "Friendly Support",
      description:
        "The Love Boat soon will be making another run explore strange tools enter new worlds.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>WHY CHOOSE US</h1>
        <div className={styles.greyLine}></div>
        <div className={styles.row}>
          {items.map((item, index) => (
            <div className={styles.item} key={index}>
              <img src={item.logo} alt="Logo" className={styles.logo} />
              <div className={styles.text}>
                <h3 className={styles.subtitle}>{item.subtitle}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
