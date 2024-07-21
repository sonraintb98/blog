import React from "react";
import styles from "./StylesEducation.module.css";
import Image from "next/image";
import bkIcon from "../../../public/bk.png";
import fptIcon from "../../../public/fpt.png";

const Education = () => {
  return (
    <div className={`${styles.timeline}`}>
      <div className={`${styles.container} ${styles.leftContainer}`}>
        <Image src={bkIcon} alt="" className={styles.image} />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>University Of Science And Technology</h2>
          <small className={styles.small}>Sep 2016 -- May 2018</small>
          <p>
            I study at University Of Science And Technology. My major is
            construction engineer. With a passion for information technology. So
            I decided to change my major.
          </p>
          <span className={styles.leftContainerArrow}></span>
        </div>
      </div>

      <div className={`${styles.container} ${styles.rightContainer}`}>
        <Image
          src={fptIcon}
          alt=""
          className={`${styles.image} ${styles.rigthImage}`}
        />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>FPT University</h2>
          <small className={styles.small}>May 2018 -- Dec 2020</small>
          <p>I graduated from FPT university with Bachelor of IT degree.</p>
          <span className={styles.rightContainerArrow}></span>
        </div>
      </div>
    </div>
  );
};

export default Education;
