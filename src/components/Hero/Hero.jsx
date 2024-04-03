import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yamuna</h1>
        <p className={styles.description}>
        I'm a full-stack developer, I specialize in crafting modern, user-friendly interfaces with React on the front end, coupled with powerful and efficient backend solutions using Node.js. Whether you're aiming to develop dynamic single-page applications, interactive web portals, or complex enterprise systems, I have the skills and knowledge to bring your vision to life.
        </p>
        <a href="mailto:yamunag1812@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/yamunaImage.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
