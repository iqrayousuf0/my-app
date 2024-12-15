import React from "react";
import styles from "./serviceDetails.module.css";
import images from "@/components/slider/images/images";
const serviceDetails = () => {
  return (
    
    <div >
          <section className={styles.projects_section}>
        <img
          src="/images/project1.jpg"
          alt="Background"
          className={styles.background_image}
        />
        <div className={styles.overlay}></div>
        <h1 className={styles.section_title}>SERVICE DETAILS</h1>
      </section>
      <div className={styles.container}>
      {/* Main Content */}
      <div className={styles.content}>
        {/* Header Section */}
        <div className={styles.header}>
          <img
            src="/images/service.png"
            alt="Business Meeting"
            className={styles.headerImage}
          />
          <h2 className={styles.heading2}>Business Services</h2>
          <p>
            A tailored solution that enables businesses to thrive by delivering optimized strategies
            and innovations. Helping governments and organizations achieve their goals with
            cutting-edge technologies and practices.
          </p>
        </div>

        {/* Company Presentation Section */}
        <section className={styles.companyPresentation}>
          <h3>Company Presentation:</h3>
          <p>
            The team of technology leaders at Ready Blocks ensures long-term sustainability and
            performance for every business.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h4>Technology</h4>
              <p>Providing advanced solutions through innovative methods.</p>
            </div>
            <div className={styles.feature}>
              <h4>Innovation</h4>
              <p>Leading industries with modern approaches.</p>
            </div>
            <div className={styles.feature}>
              <h4>Integration</h4>
              <p>Ensuring seamless processes across platforms.</p>
            </div>
          </div>
          <div className={styles.chart}>
            <img
              src="/images/chart.png"
              alt="Growth Chart"
              className={styles.chartImage}
            />
          </div>
        </section>

        {/* Useful Topics Accordion */}
        <section className={styles.usefulTopics}>
          <h3 className="h3">Useful Topics:</h3>
          <div className={styles.accordion}>
            <details>
              <summary>1. What industries do you specialize in?</summary>
              <p>We work with various industries including finance, technology, and healthcare.</p>
            </details>
            <details>
              <summary>2. Do you guarantee return on investments?</summary>
              <p>
                While we ensure optimized strategies, ROI depends on multiple business factors.
              </p>
            </details>
            <details>
              <summary>3. How do you manage projects efficiently?</summary>
              <p className="p">
                By using agile methodologies and modern project management tools to track progress.
              </p>
            </details>
          </div>
        </section>
     
        {/* Reliable Market Growth */}
        <div >
        <div className={styles.h2}>Reliable Market Growth:</div>
        <div className={styles.container_last}>
      <div className={styles.imageSection}>
        <img
          src="/images/21.png"
          alt="Market Growth"
          className={styles.image}
        />
      </div>
      
      <div className={styles.contentSection}>
       
        <p className="p">
          The sky moving on up to the east side a family to explore strange new
          worlds to seek out new life and new civilizations to boldly go where
          no man has gone before you would see the biggest gift.
        </p>
        <ul className={styles.list}>
          <li><em>Launches the last of Americas deep space.</em></li>
          <li><em>Town to town and up and down the dial.</em></li>
          <li><em>Kitchen and beans don't burn on the grill of maid.</em></li>
          <li><em>The lady met this fellow and they knew it.</em></li>
          <li><em>Most of this beautiful the day.</em></li>
        </ul>
      </div>
    </div>
    </div>
      </div>

      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h3 className="h3">Our Solutions</h3>
        <ul className={styles.solutionsList}>
          <li>Travel and Aviation</li>
          <li>Business Services</li>
          <li>Consumer Products</li>
          <li>Financial Services</li>
          <li>Software Research</li>
          <li>Quality Resourcing</li>
        </ul>

        <h3>Brochure</h3>
        <div className={styles.brochure}>
          <a href="#" className={styles.downloadBtn}>
            Download file.pdf
          </a>
          <a href="#" className={styles.downloadBtn}>
            Download file.zip
          </a>
        </div>

        <h3>Contact Form</h3>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </aside>
    </div>
    </div >

  );
};

export default serviceDetails;
