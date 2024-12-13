import React from "react";
import styles from "./footer.module.css"; // Importing the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        {/* About Section */}
        <div className={styles.footer_section}>
          <h3>ABOUT OUR CONSULTING</h3>
          <p>
            That started from this tropic port aboard this tiny ship today still
            want by them government they survive on up to the three east side to
            a deluxe as soldiers of artics fortune.
          </p>
          <p className={styles.contact}>
            <span>Any Queries: (+1) 234 567 900</span>
          </p>
        </div>

        {/* Recent Posts Section */}
        <div className={styles.footer_section}>
          <h3>RECENT POSTS</h3>
          <div className={styles.post}>
            <img
              src="/images/foot1.jpg"
              alt="Post 1"
              className={styles.post_image}
            />
            <div>
              <p>
                <a href="#post1" className={styles.link}>
                  Till wanted by the team government...
                </a>
              </p>
              <span>Feb 06, 2018</span>
            </div>
          </div>
          <div className={styles.post}>
            <img
              src="/images/foot2.jpg"
              alt="Post 2"
              className={styles.post_image}
            />
            <div>
              <p>
                <a href="#post2" className={styles.link}>
                  World don’t move to the beat of one drum...
                </a>
              </p>
              <span>Mar 20, 2018</span>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className={styles.footer_section}>
          <h3>SOLUTIONS</h3>
          <ul className={styles.list}>
            <li>Travel and Aviation</li>
            <li>Business Services</li>
            <li>Consumer Products</li>
            <li>Financial Services</li>
            <li>Software Research</li>
            <li>Quality Resourcing</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className={styles.footer_section}>
          <h3>NEWSLETTER</h3>
          <form className={styles.newsletter_form}>
            <input
              type="text"
              placeholder="Name"
              className={styles.input_field}
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.input_field}
            />
            <button type="submit" className={styles.subscribe_button}>
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div   className={styles.footer_bottombk}>
        <div   className={styles.footer_bottom}>
        <div className={styles.bottom_content}>
          <p>©️ Copyrights 2018. All Rights Reserved.</p>
          </div>
          <div>
          <nav className={styles.footer_nav}>
            <a href="#about" className={styles.nav_link}>
              About
            </a>
            <a href="#solutions" className={styles.nav_link}>
              Solutions
            </a>
            <a href="#faqs" className={styles.nav_link}>
              FAQs
            </a>
            <a href="#contact" className={styles.nav_link}>
              Contact
            </a>
          </nav>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
