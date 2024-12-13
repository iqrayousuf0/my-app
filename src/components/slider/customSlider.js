import React, { useState, useEffect } from "react";
import styles from "./slider.module.css"; // Import CSS module

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDone, setSlideDone] = useState(true);
  const [timeID, setTimeID] = useState(null);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideDone(true);
        }, 5000)
      );
    }
  }, [slideDone]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideDone) {
      setSlideDone(true);
    }
  };

  return (
    <div
      className={styles.container__slider} // Use styles object here
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {children.map((item, index) => {
        return (
          <div
            className={
              `${styles.slider__item} ${
                styles[`slider__item-active-${activeIndex + 1}`]
              }` // Dynamic class handling with template literals
            }
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className={styles.container__slider__links}>
        {" "}
        {/* CSS module */}
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? `${styles.container__slider__links_small} ${styles.container__slider__links_small_active}`
                  : styles.container__slider__links_small
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>
      <div className={styles.slider__overlaytext}>
        <div className={styles.slider__overlaytext1}>
          The government they survive artical of fortune HIGH-QUALITY MARKET
        </div>
        <div className={styles.slider__overlaytext2}>
          <h1>
            HIGH-QUALITY MARKET <br />
            <br />
            EXPERIENCES
          </h1>
        </div>
        <div className={styles.slider__overlaytext3}>ABOUT US</div>
      </div>

      {/* <button
        className={styles.slider__btn_next}  // Use styles for button classes
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>
      <button
        className={styles.slider__btn_prev}  // Use styles for button classes
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button> */}
    </div>
  );
}

export default CustomCarousel;
