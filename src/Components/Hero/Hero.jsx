/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oi, meu nome é Felipe</h1>
        <p className={styles.description}>
          Sou um desenvolvedor full-stack em treinamento.
        </p>
        <a href="mailto:felipe-spazziani-colliaso@outlook.com" className={styles.contactBtn}>
          Contate-me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Foto.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
