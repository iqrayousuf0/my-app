import React from "react";
import styles from "./aboutHead.module.css"; // Importing the same CSS file for both sections

const AboutPage = () => {
  return (
    <div>
      {/* First Section (Head) */}
      <section className={styles.projects_section}>
        <img
          src="/images/project1.jpg"
          alt="Background"
          className={styles.background_image}
        />
        <div className={styles.overlay}></div>
        <h1 className={styles.section_title}>ABOUT</h1>
      </section>
      {/* Blue Section */}
      <div className={styles.container}>
        <section className={styles.blueSection}>
          <div className={styles.blueContent}>
            <h1 className={styles.title}>High-Quality Market Experinces</h1>
            <div className={styles.verticalDivider}></div>
            <p className={styles.description}>
              A tale of a fateful trip that started from this tropic port aboard
              this tiny ship today still wanted by the government they survive
              as soldiers of fortune to ever wonder the east side to a deluxe
              apartment.
            </p>
            <button className={styles.freeQuoteButton}>contact us</button>
          </div>
        </section>
      </div>
      {/* history section */}
      <div className={styles.section_container}>
        <div className={styles.image_title_container}>
          <img
            src="/images/history.jpg"
            alt="Image"
            className={styles.section_image}
          />
          <div className={styles.title_container}>
            <h2 className={styles.section_titlee}>SHORT HISTORY</h2>
            <div className={styles.grey_line}></div>
            <p className={styles.section_description}>
              A tale of a fateful trip that started from this tropic port aboard
              this tiny ship today still wanted by the government they survive
              as soldiers of fortune to a deluxe you apartment in the sky to
              explore strange new worlds to seek out new life and new
              civilizations to boldly go where no man has gone.
            </p>
            <p className={styles.section_description}>
              You would see the biggest gift would be from me and the card
              attached would so thank you for being a friend the biggest gift.
            </p>
            <img
              src="/images/sign.png"
              alt="Signature"
              className={styles.signature_imagee}
            />
          </div>
        </div>
      </div>

      
{/* ratings */}
      <div className={styles.containerr}>
        <div className={styles.contentWrapper}>
        
          <div className={styles.numberRow}>
            <div className={styles.numberItem}>
              <h1 className={styles.mainText}>30+</h1>
              <p className={styles.smallDescription}>Years of Excellence</p>
            </div>

            <div className={styles.numberItem}>
              <h1 className={styles.mainText}>53k</h1>
              <p className={styles.smallDescription}>Cases Completed</p>
            </div>

            <div className={styles.numberItem}>
              <h1 className={styles.mainText}>100%</h1>
              <p className={styles.smallDescription}>Client Satisfaction</p>
            </div>

            <div className={styles.numberItem}>
              <h1 className={styles.mainText}>24</h1>
              <p className={styles.smallDescription}>Consultants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
