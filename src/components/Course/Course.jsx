import React from "react";
import styles from "./Course.module.css"; 
import course from "../../data/details.json";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";



export const Course = () => {
  return (
    <section className={styles.container} id="course">
      <h2 className={styles.title}>Course</h2>
      <div className={styles.content}>
      <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      <ul className={styles.details}>
        
        {course.map((detailsItem, id) => {
          return (
            <li key={id} className={styles.detailsItem}>
              {/* Assuming you have a function getImageUrl defined somewhere */}
              {/* <img
                src={getImageUrl(detailsItem.imageSrc)}
                alt={`${detailsItem.organisation} Logo`}
              /> */}
              <div className={styles.detailsItemDetails}>
                <h3>{`${detailsItem.course}, ${detailsItem.institute}`}</h3>
                <p>{`${detailsItem.startDate} - ${detailsItem.endDate}`}</p>
              </div>
            </li>
          );
        })}
      </ul>
      </div>
    </section>
  );
};
