import React from "react";
import styles from "./header.module.css";



const Navi = () => {
  return (
    <div>
      {/* Top Header */}
      <div className={styles.topHeader}>
        <div className={styles.topHeaderInner}>
          <span className={styles.topHeaderText}>
            We are leading consultant firm!
          </span>
          <div className={styles.topHeaderIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <img src="./images/facebook.jpeg" alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <img src="./images/twitter.jpeg" alt="Twitter" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.icon}
            >
              <img src="./images/linkedin.jpeg" alt="LinkedIn" />
            </a>
            {/* <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <img src="./images/pinterest.jpeg" alt="Pinterest" />
          </a> */}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.topHeaderInner}>
          <div className={styles.logo}>
            <img src="./images/charles.png" alt="Charles Logo" />
          </div>

          <nav className={styles.navLinks}>
            <a href="#home" className={styles.navLink}>
              Home
            </a>/
            <a href="#pages" className={styles.navLink}>
              Pages
            </a>/
            <a href="#service" className={styles.navLink}>
              Service
            </a>/
            <a href="#portfolio" className={styles.navLink}>
              Portfolio
            </a>/
            <a href="#blog" className={styles.navLink}>
              Blog
            </a>/
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navi;
