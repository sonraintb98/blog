import React from "react";
import styles from "@/components/Footer/footer.module.css";

const AppFooter = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["row"]}>
        <div className={styles["column"]}>
          <h2>Phone</h2>
          <p>0945006158</p>
        </div>
        <div className={styles["column"]}>
          <h2>Email</h2>
          <p>hoaisonkt1998@gmail.com</p>
        </div>
        <div className={styles["column"]}>
          <h2>Follow Me</h2>
          <p>Facebook</p>
        </div>
        <div className={styles["column"]}>
          {/* <h2 className="text-xl font-bold">Phone</h2> */}
          <p>Copyright @ NGUYEN HOAI SON</p>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
