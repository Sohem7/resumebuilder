import React from "react";

import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A Resume building App To make resume
        </p>
      </div>
      <div className={styles.right}>
        <img src={props.link} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
