import React, { useState, useEffect } from "react";
import styles from "./news.module.css";

function News() {
  const allNewsItems = [
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
      subtitle: "Make the best of things, it's an uphill climb long time",
    },
    {
      imgSrc: "/images/cad13.jpg",
      date: "May 12, 2018",
      subtitle: "Kind of torture to have to watch the show the day",
    },
    {
      imgSrc: "/images/cad14.jpg",
      date: "Jul 22, 2018",
      subtitle: "Make the best of things, it's an uphill climb long time",
    },
    {
      imgSrc: "/images/cad15.jpg",
      date: "Nov 01, 2018",
      subtitle: "Kind of torture to have to watch the show the day",
    },
  ];

  const [visibleNews, setVisibleNews] = useState(allNewsItems.slice(0, 3)); 
  const [index, setIndex] = useState(3); 

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleNews((prevNews) => {
    
        const nextIndex = index < allNewsItems.length ? index : 0;
        setIndex(nextIndex + 1);
        return [...prevNews.slice(1), allNewsItems[nextIndex]];
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, [index, allNewsItems]);

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
      <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
  {visibleNews.map((item, i) => (
    <div
      key={i}
      className={styles.card}
      style={{ animationDelay: `${i * 0.3}s` }} // Stagger animations
    >
      {/* Image Card */}
      <div className={styles.imageWrapper}>
        <img
          src={item.imgSrc}
          alt={`News ${i + 1}`}
          className={styles.image}
        />
        <div className={styles.dateButton}>{item.date}</div>
      </div>
      {/* Title and Read More */}
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
    </div>
  );
}

export default News;
