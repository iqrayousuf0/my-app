import React from "react";
import styles from "./blogList.module.css";

const BlogDetails = () => {
  return (
    <div>
      <section className={styles.blog_section}>
        <img
          src="/images/project1.jpg"
          alt="Background"
          className={styles.background_imagee}
        />
        <div className={styles.overllay}></div>
        <h1 className={styles.section_tittle}>BLOG LIST</h1>
      </section>
    </div>
  );
}

export default BlogDetails;