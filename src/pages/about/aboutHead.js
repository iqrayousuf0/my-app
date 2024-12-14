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

      {/* Hero Section */}

      <div>
        <div className={styles.heroContainer}>
          <div className={styles.overlay}></div>
          <img
            src="/images/card3.jpg" // Replace with your image path
            alt="Background"
            className={styles.backgroundImageee}
          />
          <div className={styles.heroContent}>
            <h1 className={styles.heading}>WE ARE ALWAYS BEST</h1>
            <div className={styles.line}></div>
            <p className={styles.descriptionnn}>
              A tale of a fateful trip that started from this tropic port aboard
              this tiny ship today stillers.
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className={styles.cardWrapper}>
          <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
              {/* Left side with cards */}
              <div className={styles.cardList}>
                <div className={styles.cardRow}>
                  <img
                    src="/images/6.png" // Replace with your icon path
                    alt="Icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3 className={styles.cardTitle}>Best Strategy</h3>
                    <p className={styles.cardDescription}>
                      The Love Boat soon will be making another run. Strange
                      tools enter new worlds.
                    </p>
                  </div>
                </div>

                <div className={styles.cardRow}>
                  <img src="/images/7.png" alt="Icon" className={styles.icon} />
                  <div>
                    <h3 className={styles.cardTitle}>High-Quality Services</h3>
                    <p className={styles.cardDescription}>
                      The Love Boat soon will be making another run. Strange
                      tools enter new worlds.
                    </p>
                  </div>
                </div>

                <div className={styles.cardRow}>
                  <img src="/images/8.png" alt="Icon" className={styles.icon} />
                  <div>
                    <h3 className={styles.cardTitle}>Friendly Support</h3>
                    <p className={styles.cardDescription}>
                      The Love Boat soon will be making another run. Strange
                      tools enter new worlds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side image */}
              <div className={styles.imageSection}>
                <img
                  src="/images/history.jpg" // Replace with your image path
                  alt="Team"
                  className={styles.rightImage}
                />
              </div>
            </div>
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

      <div className={styles.newsSection}>
        {/* Title Section */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.tittle}>CORE VALUES</h2>
          <div className={styles.greyLine}></div>
        </div>

        {/* Card Grid Section */}
        <div className={styles.cardGrid}>
          {[
            {
              imgSrc: "/images/card1.jpg",
              subtitle: "Kind of torture to have to watch the show the day",
              description:
                "A tale of a fateful trip that started from this tropic port aboard the ship.",
            },
            {
              imgSrc: "/images/card2.jpg",
              subtitle: "Trouble with law since to eastern side of yellow mint",
              description:
                "Make the best of things, it's an uphill climb for long time.",
            },
            {
              imgSrc: "/images/card3.jpg",
              subtitle:
                "Make the best of things, it's an uphill climb long time",
              description:
                "A tale of a fateful trip that started from this tropic port aboard the ship.",
            },
          ].map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.imgSrc}
                  alt={`News ${index + 1}`}
                  className={styles.image}
                />
              </div>
              <div className={styles.textContent}>
                <h3 className={styles.subtitle}>{item.subtitle}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>




      {/* brands */}

    <div className={styles.conttainer}>
      <div className={styles.text}>OUR PARTNERS</div>
      <div className={styles.imageWrapperr}>
        <img src="/images/cod1.jpg" alt="Image 1" className={styles.immage} />
        <img src="/images/cod2.jpg" alt="Image 2" className={styles.immage} />
        <img src="/images/cod3.jpg" alt="Image 3" className={styles.immage} />
        <img src="/images/cod4.jpg" alt="Image 4" className={styles.immage} />
        <img src="/images/cod5.jpg" alt="Image 5" className={styles.immage} />
      </div>
    </div>
 




    </div>
  );
};

export default AboutPage;
