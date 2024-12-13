import React, { useState } from "react";
import styles from "./faqshome.module.css";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment.",
    },
    {
      question: "You guarantee that our plan will raise capital?",
      answer:
        "Yes, we ensure that our carefully crafted plan meets the expectations of investors and stakeholders with a clear path to success.",
    },
    {
      question: "What other services do you offer?",
      answer:
        "We provide strategic consulting, market analysis, and tailored solutions for your business challenges.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment.",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Background Header Section */}
      <div className={styles.header}>
        <img
          src="./images/feqsBac.jpg"
          alt="FAQ Background"
          className={styles.headerImage}
        />
        <div className={styles.headerOverlay}>
          <div className={styles.headerOverlayContent}>
            <h2 className={styles.title}>FAQ'S</h2>
            <hr className={styles.divider} />
            <p className={styles.subtitle}>
              A tale of a fateful trip that started from this tropic port aboard
              this tiny ship today stillers.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section: Video + FAQ */}
      <div className={styles.content}>
        {/* Video Section */}
        <div className={styles.videoSection}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <div className={styles.question} onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span
                  className={`${styles.arrow} ${
                    activeIndex === index ? styles.open : ""
                  }`}
                >
                  →
                </span>
              </div>
              <div className={styles.questionLine}></div>{" "}
              {/* Line under the question */}
              <div
                className={`${styles.answer} ${
                  activeIndex === index ? styles.show : ""
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
