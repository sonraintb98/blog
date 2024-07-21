import React from "react";
import styles from "./StylesWorkExperience.module.css";
import Image from "next/image";
import webIcon from "../../../public/web.png";
import androidIcon from "../../../public/android.png";
import vbpoIcon from "../../../public/vbpo.png";
import tmtIcon from "../../../public/tmt.png";
import mtiIcon from "../../../public/mti.png";

const WorkExperience = () => {
  return (
    <div className={`${styles.timeline}`}>
      {/* Block one */}
      <div className={`${styles.container} ${styles.leftContainer}`}>
        <Image src={webIcon} alt="" className={styles.image} />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>WEB DEVELOP, FPT EDUCATION</h2>
          <small className={styles.small}>Jun 2018 -- Sep 2018</small>
          <p>
            I used to development nguyenduc.edu.vn website, DaNangTravel
            website, ShoeShop website,... I use skill list HTML5 - CSS3 - Jquery
            - Boostrap - photoshop,...
          </p>
          <span className={styles.leftContainerArrow}></span>
        </div>
      </div>

      <div className={`${styles.container} ${styles.rightContainer}`}>
        <Image
          src={androidIcon}
          alt=""
          className={`${styles.image} ${styles.rigthImage}`}
        />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>MOBILE DEVELOP, FPT EDUCATION</h2>
          <small className={styles.small}>Oct 2018 -- Nov 2019</small>
          <p>
            I used to development Quan Ly Thu Chi App, Book Manager App,
            Vocabulary App, Tro Choi Toan Hoc App, May Tinh App, Bao Thuc App,
            Lich App, Quan Ly Benh Xa App,... I use skill list Java, Android,
            Photoshop.
          </p>
          <span className={styles.rightContainerArrow}></span>
        </div>
      </div>

      {/* Block two */}
      <div className={`${styles.container} ${styles.leftContainer}`}>
        <Image src={vbpoIcon} alt="" className={styles.image} />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>JOIN STOCK COMPANY V.B.P.O, DA NANG</h2>
          <small className={styles.small}>Jan 2020 -- Mar 2020</small>
          <p>
            I work website with Python Django. I’m a fresher position. I use
            skill list HTML5 - CSS3 - Jquery - Python Django - Docker,... After
            two months of probation, I was officially hired by the company. I
            cannot go to school and work at the company at the same time. So I
            chose to continue studying to graduate.
          </p>
          <span className={styles.leftContainerArrow}></span>
        </div>
      </div>

      <div className={`${styles.container} ${styles.rightContainer}`}>
        <Image
          src={tmtIcon}
          alt=""
          className={`${styles.image} ${styles.rigthImage}`}
        />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>TECHNOLOGY COMPANY TMT, DA NANG</h2>
          <small className={styles.small}>Nov 2020 -- Apr 2021</small>
          <p>
            I work Crawl data with Python - Trainning Machine Learning. I’m a
            developer position. I use skill list HTML5 - CSS3 - Jquery -
            Selenium - Python Django - MongoDB - Docker,...I use python and
            selenium to crawl newspaper pages (https://www.24h.com.vn/,
            https://tuoitre.vn/, https://vnexpress.net/,...), crawl e-commerce
            sites of Viet Nam (https://shopee.vn/, https://www.sendo.vn/,
            https://www.lazada.vn/,...), crawl e-commerce sites of Trung Quoc
            (https://world.taobao.com/, https://www.alibaba.com/,...). Then I
            analyze the data and I use MongoDB to save data.
          </p>
          <span className={styles.rightContainerArrow}></span>
        </div>
      </div>

      {/* Block three */}
      <div className={`${styles.container} ${styles.leftContainer}`}>
        <Image src={mtiIcon} alt="" className={styles.image} />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>MTI TECHNOLOGY, DA NANG</h2>
          <small className={styles.small}>Apr 2021 -- Jul 2021</small>
          <p>
            I self-taught C# language. I work Talent Board project. I’m a
            developer position. I use skill list Vue.js - C# - SQL server...I
            work in groups. We work according to an agile process. Back-end with
            C#, Front-end with Vue.js and MongoDB database. We work on employee
            systems. It displays the skill and level of each employee. In
            project, I work Back-end and Front-end. I implement task and demo
            with Product Owner.
          </p>
          <span className={styles.leftContainerArrow}></span>
        </div>
      </div>

      <div className={`${styles.container} ${styles.rightContainer}`}>
        <Image
          src={mtiIcon}
          alt=""
          className={`${styles.image} ${styles.rigthImage}`}
        />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>MTI TECHNOLOGY, DA NANG</h2>
          <small className={styles.small}>Aug 2021 -- Mar 2022</small>
          <p>
            I self-taught Java language. I work Medica project. I’m a developer
            position. I use skill list Vue.js - Java - SQL server...I work in
            groups. We work according to an agile process. Back-end with Java,
            Front-end with Vue.js and MongoDB database. We work on the
            hospital’s drug management system. In project, I work Back-end and
            Front-end. I implement task and demo with Product Owner.
          </p>
          <span className={styles.rightContainerArrow}></span>
        </div>
      </div>

      {/* Block four */}
      <div className={`${styles.container} ${styles.leftContainer}`}>
        <Image src={mtiIcon} alt="" className={styles.image} />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>MTI TECHNOLOGY, DA NANG</h2>
          <small className={styles.small}>Apr 2022 -- Aug 2022</small>
          <p>
            I work migration source code from Bitbucket to GitHub for ONE
            Company.
          </p>
          <span className={styles.leftContainerArrow}></span>
        </div>
      </div>

      <div className={`${styles.container} ${styles.rightContainer}`}>
        <Image
          src={mtiIcon}
          alt=""
          className={`${styles.image} ${styles.rigthImage}`}
        />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>MTI TECHNOLOGY, DA NANG</h2>
          <small className={styles.small}>Sep 2022 -- Nov 2022</small>
          <p>
            I self-taught ReactJS language and NodeJS language. I self-study on
            w3school. I self-study NestJS on https://nestjs.com/. Then I work
            project demo. I self-study NextJS on https://nextjs.org/. Then I
            work project demo.
          </p>
          <span className={styles.rightContainerArrow}></span>
        </div>
      </div>

      {/* Block five */}
      <div className={`${styles.container} ${styles.leftContainer}`}>
        <Image src={mtiIcon} alt="" className={styles.image} />
        <div className={styles.textBox}>
          <h2 className={styles.h2}>MTI TECHNOLOGY, DA NANG</h2>
          <small className={styles.small}>Dec 2022 -- Present</small>
          <p>
            I work PLTool project. I’m a developer position. I use skill list
            React - NodeJS - NextJs - NestJs - MongoDB,... I work in groups. We
            work according to an agile process. Back-end with NestJS, Front-end
            with NextJS and MongoDB database. We work on employee management
            systems. The system is used by human resources and management
            departments. For the human resources department, they can add, edit,
            and delete one or more employees by importing excel files. The
            system automatically calculates salaries and exports excel files.
            With the management department, they can add new projects, add
            people to the project, and display project information. The system
            has charts for statistics on employees, projects and cash flow. In
            project, I work Back-end and Front-end. I implement task and demo
            with Product Owner.
          </p>
          <span className={styles.leftContainerArrow}></span>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
