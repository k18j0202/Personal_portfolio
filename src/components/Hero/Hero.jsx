import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>KARTHIK J</h1>
        <p className={styles.description}>
          I'm a full-stack developer using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <ul>
          <a href="mailto:ratchagankarthik623@email.com" className={styles.contactBtn}>
          Download CV
        </a>
        <a href="mailto:ratchagankarthik623@email.com" className={styles.contactBtn}>
          Download CV
        </a>
        </ul>
      </div>
      <img height={500}
        src={getImageUrl("hero/heroImage.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
