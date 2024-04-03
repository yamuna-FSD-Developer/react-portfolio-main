import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              As a frontend developer, I specialize in creating visually stunning and seamlessly functional websites that adapt flawlessly to various screen sizes and devices. Leveraging the latest frontend technologies and best practices, I ensure that every aspect of your website is optimized for performance, accessibility, and user engagement.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              My expertise spans a wide range of backend technologies, including Node.js,Express.js, MongoDB and more. Leveraging this diverse skill set, I'm equipped to tackle various challenges in backend development, from designing efficient database schemas to implementing complex business logic and ensuring seamless integration with frontend systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
              A full-stack developer who can turn your web development vision into reality.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
