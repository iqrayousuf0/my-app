import React from "react";
import styles from "./news.module.css";

function News() {
  const newsItems = [
    {
      imgSrc: "/images/card1.jpg",
      date: "Apr 14, 2018",
      subtitle: "Kind of torture to have to watch the show the day",
    },
    {
      imgSrc: "/images/card2.jpg",
      date: "Feb 06, 2018",
      subtitle: "Trouble with law since to eastern side of yellow mint",
    },
    {
      imgSrc: "/images/card3.jpg",
      date: "Mar 30, 2018",
      subtitle: "make the best of things its an uphill climb long time",
    },
    {
      imgSrc: "/images/cad13.jpg",
      date: "May 12, 2018",
      subtitle: "Kind of torture to have to watch the show the day",
    },
    {
      imgSrc: "/images/cad14.jpg",
      date: "Jul 22, 2018",
      subtitle: "make the best of things its an uphill climb long time",
    },
    {
      imgSrc: "/images/cad15.jpg",
      date: "Nov 01, 2018",
      subtitle: "Kind of torture to have to watch the show the day",
    },
  ];

  return (
    <div className={styles.newsSection}>
      {/* Title Section */}
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>LATEST NEWS</h2>
        <div className={styles.greyLine}></div>
        <p className={styles.description}>
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>
      </div>

      {/* Slider Section */}
      <div className={styles.slider}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.card}>
            {/* Image Card */}
            <div className={styles.imageWrapper}>
              <img
                src={item.imgSrc}
                alt={`News ${index + 1}`}
                className={styles.image}
              />
              <div className={styles.dateButton}>{item.date}</div>
            </div>
            {/* Title and Read More Outside the Card */}
            <div className={styles.textWrapper}>
              <h3 className={styles.subtitle}>{item.subtitle}</h3>
              <a href="#" className={styles.readMore}>
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
