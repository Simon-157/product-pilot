/* This is a React component called `Loader` that renders a loading animation with 8 cards, each
containing an image and a title.The `Loader` component is exported as the default export of the module. */
import React from "react";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      {[...Array(8)]?.map((_, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.image}><img></img></div>
          <div className={styles.title}></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;


