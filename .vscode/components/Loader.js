import React from 'react';
import styles from "../styles/Loader.module.css";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
  <div>
    <div className={styles.circleLoader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>  </div>
    );
};

export default Loader;
