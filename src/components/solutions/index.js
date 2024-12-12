
import styles from "./solutions.module.css";

const Component = () => {
  const imagePaths = [
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
  ];

  return (
    <div className={styles.container}>
      {/* Blue Section */}
      <section className={styles.blueSection}>
        <div className={styles.blueContent}>
          <h1 className={styles.title}>
            Provide solutions for the realiable growth
          </h1>
          <div className={styles.verticalDivider}></div>
          <p className={styles.description}>
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today still wanted by the government they survive as
            soldiers of fortune to ever wonder the east side to a deluxe
            apartment.
          </p>
          <button className={styles.freeQuoteButton}>FREE QUOTES</button>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className={styles.solutionsSection}>
        <h2 className={styles.solutionsTitle}>OUR SOLUTIONS</h2>
        <hr className={styles.horizontalDivider} />
        <div className={styles.solutionsWrapper}>
          {imagePaths.map((path, index) => (
            <div key={index} className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <img
                  src={path}
                  alt={`Solution Icon ${index + 1}`}
                  className={styles.iconImage}
                />
              </div>
              <h3 className={styles.solutionTitle}>Business Services</h3>
              <p className={styles.solutionDescription}>
                The explore strange new worlds to seek fout new life and new
                civilizations to boldly where no man has before gone.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Component;