import React, { useState } from "react";
import styles from "./header.module.css";

const Navi = () => {
  const [dropdownVisible, setDropdownVisible] = useState({
    pages: false,
    home: false,
    services: false,
    portfolio: false,
    blogs: false,
    contacts: false,
  });

  const toggleDropdown = (menu, state) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [menu]: state,
    }));
  };

  return (
    <div>
      {/* Top Header */}
      <div className={styles.topHeader}>
        <div className={styles.topHeaderInner}>
          <span className={styles.topHeaderText}>
            We are a leading consultant firm!
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
          </div>
        </div>
      </div>


      <div className={styles.mainHeader}>
        <div className={styles.topHeaderInner}>
          <div className={styles.logo}>
            <img src="./images/charles.png" alt="Charles Logo" />
          </div>

          <nav className={styles.navLinks}>
          
            <div
              className={styles.navLink}
              onMouseEnter={() => toggleDropdown("home", true)}
              onMouseLeave={() => toggleDropdown("home", false)}
            >
              Home
              {dropdownVisible.home && (
                <div className={styles.dropdownMenu}>
                  <a href="#HomeVersionOne" className={styles.dropdownLink}>
                    Home Version One
                  </a>
                  <a href="#HomeVersionTwo" className={styles.dropdownLink}>
                  Home Version Two
                  </a>
                 
                </div>
              )}
            </div>/

            <div
              className={styles.navLink}
              onMouseEnter={() => toggleDropdown("pages", true)}
              onMouseLeave={() => toggleDropdown("pages", false)}
            >
              Pages
              {dropdownVisible.pages && (
                <div className={styles.dropdownMenu}>
                  <a href="#about" className={styles.dropdownLink}>
                    About Us
                  </a>
                  <a href="#team" className={styles.dropdownLink}>
                    Our Team
                  </a>
                 
                  <a href="#faq" className={styles.dropdownLink}>
                    FAQs
                  </a>
                  <a href="#404" className={styles.dropdownLink}>
                    404
                  </a>
                  
                </div>
              )}
            </div>/

            <div
              className={styles.navLink}
              onMouseEnter={() => toggleDropdown("services", true)}
              onMouseLeave={() => toggleDropdown("services", false)}
            >
              Services
              {dropdownVisible.services && (
                <div className={styles.dropdownMenu}>
                  <a href="#ServicesVersionOne" className={styles.dropdownLink}>
                    Services Version One
                  </a>
                  <a href="#ServicesVersionTwo" className={styles.dropdownLink}>
                  Services Version Two
                  </a>
                  <a href="#ServicesDetails" className={styles.dropdownLink}>
                  Services Details
                  </a>
                </div>
              )}
            </div>/

           
            <div
              className={styles.navLink}
              onMouseEnter={() => toggleDropdown("portfolio", true)}
              onMouseLeave={() => toggleDropdown("portfolio", false)}
            >
              Portfolio
              {dropdownVisible.portfolio && (
                <div className={styles.dropdownMenu}>
                  <a href="#projects" className={styles.dropdownLink}>
                    Project
                  </a>
                  <a href="#ServicesDetails" className={styles.dropdownLink}>
                  Services Details
                  </a>
                 
                </div>
              )}
            </div>/

    
            <div
              className={styles.navLink}
              onMouseEnter={() => toggleDropdown("blogs", true)}
              onMouseLeave={() => toggleDropdown("blogs", false)}
            >
              Blogs
              {dropdownVisible.blogs && (
                <div className={styles.dropdownMenu}>
                  <a href="#BlogList" className={styles.dropdownLink}>
                    Blog List
                  </a>
                  <a href="#BlogGrid" className={styles.dropdownLink}>
                    Blog Grid
                  </a>
                  <a href="#BlogDetails" className={styles.dropdownLink}>
                    Blog Details
                  </a>
                </div>
              )}
            </div>/


            <div
              className={styles.navLink}
              onMouseEnter={() => toggleDropdown("contacts", true)}
              onMouseLeave={() => toggleDropdown("contacts", false)}
            >
              Contacts
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navi;
