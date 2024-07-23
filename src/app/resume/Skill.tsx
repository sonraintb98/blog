import React from "react";
import styles from "./StylesSkill.module.css";

const Skill = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skillBox}>
        <div className={styles.title}>ReactJs</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.react}`}>
            <span className={styles.tooltip}>80%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>Node.js</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.node}`}>
            <span className={styles.tooltip}>75%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>Next.js</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.next}`}>
            <span className={styles.tooltip}>80%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>NestJS</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.nest}`}>
            <span className={styles.tooltip}>75%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>HTML/CSS</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.html}`}>
            <span className={styles.tooltip}>95%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>JavaScript</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.javascript}`}>
            <span className={styles.tooltip}>80%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>Android</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.android}`}>
            <span className={styles.tooltip}>85%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>Java</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.java}`}>
            <span className={styles.tooltip}>75%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>C#</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.cSharp}`}>
            <span className={styles.tooltip}>65%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>Vue.js</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.vue}`}>
            <span className={styles.tooltip}>65%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>Python</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.python}`}>
            <span className={styles.tooltip}>70%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>Docker</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.docker}`}>
            <span className={styles.tooltip}>60%</span>
          </div>
        </div>
      </div>

      <div className={styles.skillBox}>
        <div className={styles.title}>GitHub</div>
        <div className={styles.skillBar}>
          <div className={`${styles.skillPer} ${styles.github}`}>
            <span className={styles.tooltip}>80%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
