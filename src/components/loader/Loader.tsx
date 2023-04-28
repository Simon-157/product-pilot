
import React from "react";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      {[...Array(8)].map((_, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.image}><img></img></div>
          <div className={styles.title}></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;



