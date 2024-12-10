import React from "react";
import styles from "./header.module.css";



const Navi = () => {
  return (
    <div>
      {/* Top Header */}
      <div className={styles.topHeader}>
        <span className={styles.topHeaderText}>
          We are leading consultant firm!
        </span>
        <div className={styles.topHeaderIcons}>
          <span className={styles.icon}>🌐</span>{" "}
          {/* Replace with your language dropdown */}
          <span className={styles.icon}>🔍</span>{" "}
          {/* Replace with other icons if needed */}
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.logo}>Charles</div>
        <nav className={styles.navLinks}>
          <a href="#home" className={styles.navLink}>
            Home
          </a>
          <a href="#pages" className={styles.navLink}>
            Pages
          </a>
          <a href="#service" className={styles.navLink}>
            Service
          </a>
          <a href="#portfolio" className={styles.navLink}>
            Portfolio
          </a>
          <a href="#blog" className={styles.navLink}>
            Blog
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navi;