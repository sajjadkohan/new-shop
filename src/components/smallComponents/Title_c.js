'use client';
import React from "react";
import styles from "../../styles/smallComponents/Title_c.module.css";
import { Link } from "react-scroll";

const Title_c = (props) => {
  return (
    <div className={styles.title_c}>
      <Link href={`/products/${props.hrefPath}`}>
        <div>
        <h1 className={styles.title}>{props.title}</h1>
        <span className={styles.svg}>
      
          <svg
            strokeWidth='33'
            width="33"
            height="22"
            viewBox="0 0 39 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.03452 10.0345C0.501307 10.5677 0.501307 11.4323 1.03452 11.9655L9.7238 20.6548C10.257 21.188 11.1215 21.188 11.6548 20.6548C12.188 20.1215 12.188 19.257 11.6548 18.7238L3.93095 11L11.6548 3.2762C12.188 2.74298 12.188 1.87846 11.6548 1.34525C11.1215 0.812028 10.257 0.812028 9.7238 1.34525L1.03452 10.0345ZM39 9.63461L2 9.63461V12.3654L39 12.3654V9.63461Z"
              fill="#AFAFAF"
            />
          </svg>
        </span>
        </div>
      </Link>
    </div>
  );
};

export default Title_c;
