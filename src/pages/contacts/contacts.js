import React from "react";
import styles from "./contacts.module.css";

const Blog = () => {
  return (
    <div>
      {/* Map Container */}
      <div className={styles.mapContainer}>
        <img
          src="/images/map.jpg"
          alt="Map background"
          className={styles.backgroundImage}
        />
        <div className={styles.backgroundOverlay}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>New York</h2>
          <div className={styles.locationLogo}>{/* Optional logo */}</div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className={styles.container}>
        {/* Title Section */}
        <div className={styles.titleSection}>
          <h1 className={styles.title}>GET IN TOUCH</h1>
          <hr className={styles.line} />
          <p className={styles.description}>
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today stillers.
          </p>
        </div>

        {/* Contact Card */}
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img
              src="/images/15.jpg"
              alt="Placeholder"
              className={styles.image}
            />
          </div>

          {/* Right Form Section */}
          <div className={styles.cardDetails}>
            {/* Name and Phone Row */}
            <div className={styles.row}>
              <input
                type="text"
                placeholder="Name"
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Phone"
                className={styles.inputField}
              />
            </div>
            <hr className={styles.rowLine} />{" "}
            {/* Grey line after Name and Phone */}
            {/* Email and Website Row */}
            <div className={styles.row}>
              <input
                type="email"
                placeholder="Email"
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Website"
                className={styles.inputField}
              />
            </div>
            <hr className={styles.rowLine} />{" "}
            {/* Grey line after Email and Website */}
            {/* Message Row */}
            <div className={styles.row}>
              <textarea
                placeholder="Message"
                className={styles.textareaField}
              ></textarea>
            </div>
            <hr className={styles.fullLine} /> {/* Full grey line at bottom */}
            {/* Button Row */}
            <div className={styles.buttonRow}>
              <button className={styles.sendButton}>Send Message</button>
            </div>
          </div>
        </div>
      </div>




      <div className={styles.conttainer}>
        <div className={styles.itemsWrapper}>
          <div className={styles.item}>
            <div className={styles.subtitle}>United States Office</div>
            <div className={styles.itemContent}>
              <img
                src="/images/777.jpg"
                alt="Logo 1"
                className={styles.logo}
              />
              <p className={styles.description}>23A,Queenstown St,Log Vegas,USA</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>London Office</div>
            <div className={styles.itemContent}>
              <img
                src="/images/777.jpg"
                alt="Logo 2"
                className={styles.logo}
              />
              <p className={styles.description}>cityhigh,clock bell floor.United Kingdom</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>Germany Office</div>
            <div className={styles.itemContent}>
              <img
                src="/images/777.jpg"
                alt="Logo 3"
                className={styles.logo}
              />
              <p className={styles.description}>no:108,shsit st,berlin,Germany</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.subtitle}>Australia Office </div>
            <div className={styles.itemContent}>
              <img
                src="/images/777.jpg"
                alt="Logo 4"
                className={styles.logo}
              />
              <p className={styles.description}>consult floor,melbourne,Australia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
