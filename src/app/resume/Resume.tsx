import React from "react";
import styles from "./StylesResume.module.css";
import Image from "next/image";
import googleIcon from "../../../public/google.png";
import amazonIcon from "../../../public/amazon.png";
import filpkartIcon from "../../../public/flipkart.png";
import teslaIcon from "../../../public/tesla.png";
import toyotaIcon from "../../../public/toyota.png";
import youtubeIcon from "../../../public/youtube.png";

const ResumePage = () => {
  return (
    <div className={`${styles.timeline}`}>
      <div className={`${styles.container} ${styles.leftContainer}`}>
        <Image src={googleIcon} alt="" className={styles.image} />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>Alpabe Inc.</h2>
          <small className={styles.small}>2018 - 2019</small>
          <p>
            The success of every websites depends on search engine optimisation
            and digital marketing strategy. If you are on first page of all
            major search...
          </p>
          <span className={styles.leftContainerArrow}></span>
        </div>
      </div>

      <div className={`${styles.container} ${styles.rightContainer}`}>
        <Image
          src={amazonIcon}
          alt=""
          className={`${styles.image} ${styles.rigthImage}`}
        />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>Amazon Inc.</h2>
          <small className={styles.small}>2019 - 2020</small>
          <p>
            The success of every websites depends on search engine optimisation
            and digital marketing strategy. If you are on first page of all
            major search...
          </p>
          <span className={styles.rightContainerArrow}></span>
        </div>
      </div>

      <div className={`${styles.container} ${styles.leftContainer}`}>
        <Image src={teslaIcon} alt="" className={styles.image} />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>Testla Inc.</h2>
          <small className={styles.small}>2020 - 2021</small>
          <p>
            The success of every websites depends on search engine optimisation
            and digital marketing strategy. If you are on first page of all
            major search...
          </p>
          <span className={styles.leftContainerArrow}></span>
        </div>
      </div>

      <div className={`${styles.container} ${styles.rightContainer}`}>
        <Image
          src={toyotaIcon}
          alt=""
          className={`${styles.image} ${styles.rigthImage}`}
        />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>Toyota</h2>
          <small className={styles.small}>2021 - 2022</small>
          <p>
            The success of every websites depends on search engine optimisation
            and digital marketing strategy. If you are on first page of all
            major search...
          </p>
          <span className={styles.rightContainerArrow}></span>
        </div>
      </div>

      <div className={`${styles.container} ${styles.leftContainer}`}>
        <Image
          src={filpkartIcon}
          alt=""
          className={`${styles.image} ${styles.leftImage}`}
        />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>Flipkart</h2>
          <small className={styles.small}>2021 - 2022</small>
          <p>
            The success of every websites depends on search engine optimisation
            and digital marketing strategy. If you are on first page of all
            major search...The success of every websites depends on search
            engine optimisation and digital marketing strategy. If you are on
            first page of all major search...
          </p>
          <span className={styles.ContainerArrow}></span>
        </div>
      </div>

      <div className={`${styles.container} ${styles.rightContainer}`}>
        <Image
          src={youtubeIcon}
          alt=""
          className={`${styles.image} ${styles.rigthImage}`}
        />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>Youtube</h2>
          <small className={styles.small}>2021 - 2022</small>
          <p>
            The success of every websites depends on search engine optimisation
            and digital marketing strategy. If you are on first page of all
            major search...
          </p>
          <span className={styles.rightContainerArrow}></span>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
