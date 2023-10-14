import React from "react";
import styles from "../../components/CSSModule/Button.module.css"
/**
 * 
 * @author
 * @function CSSModule
 **/

export const CSSModule = (props) => {
  return (
    <div>
      <h1>CSS Module</h1>
      <div className={styles.button}>Click me</div>
    </div>
  );
};
