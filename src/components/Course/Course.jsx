import React from "react";
import styles from "./Course.module.css"; 
import course from "../../data/details.json";

export const Course = () => {
  return (
    <section className={styles.container} id="course">
      <h2 className={styles.title}>Course</h2>
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
    </section>
  );
};
