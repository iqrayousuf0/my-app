import React, { useState } from "react";
import styles from "./aboutus.module.css"; 

const AboutUs = () => {
  const [service, setService] = useState("");

  return (
    <div className={styles.aboutUsContainer}>

      <img
        src="/images/about.jpg" 
        alt="Background"
        className={styles.backgroundImage}
      />

      <div className={styles.overlay}></div>

      <div className={styles.aboutUsContentWrapper}>
        <div className={styles.leftContent}>
          <h2 className={styles.aboutUsTitle}>ABOUT US</h2>
          <div className={styles.greyLine}></div>
          <p className={styles.aboutUsDescription}>
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today still wanted by the government they survive as
            soldiers of fortune to a deluxe apartment in the sky to explore
            strange new worlds to seek out new life and new civilizations to
            boldly go where no man has gone.
          </p>
        <div   className={styles.signature}></div>
          <img src ="/images/sign.png" alt="signature" className={styles.signatureImage} />
        </div>

        <div className={styles.rightContent}>
          <div className={styles.formContainer}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Name *</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className={styles.formGroup}>
                <label>Email *</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Phone *</label>
                <input type="text" placeholder="Enter your phone number" />
              </div>
              <div className={styles.formGroup}>
                <label>Choose Services *</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={styles.dropdown}
                >
                  <option value="">Select a service</option>
                  <option value="business">Business Services</option>
                  <option value="consumer">Consumer Product</option>
                  <option value="financial">Financial Services</option>
                  <option value="software">Software Research</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.messageGroup}>
                <label>Message</label>
                <textarea rows="4" placeholder=""></textarea>
              </div>
            </div>

            <button className={styles.getQuotesButton}>GET A QUOTE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
