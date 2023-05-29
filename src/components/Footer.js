import Image from 'next/image';
import React from 'react'
import styles from "../styles/Footer.module.css";
// import logo from "../images/vector.webp";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.section + " " + styles.logoParent}>
            <div className={styles.logoDiv}>
            <Image alt='logo' width={200} height={200} className={styles.logoFooter} src={'/'} />
            </div>
            <div className={styles.desc}>
            design opens up with an offbeat and funny illustration of
             their employees as these prehistoric animals. This oddball
              theme is kept up throughout this delightful style. 
            </div>
        </div>
        <div className={styles.section + " " + styles.services}>
            <div className={styles.title}>title</div>
            <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ul>
        </div>
        <div className={styles.section + " " + styles.company}>
            <div className={styles.title}>title</div>
            <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ul>
        </div>
        <div className={styles.section + " " + styles.social}>
            <div className={styles.title}>title</div>
            <ul>
                <li>
                    <span className={styles.icon}>icon</span> 
                    <span className={styles.text}>text</span>
                </li>
                <li>
                    <span className={styles.icon}>icon</span> 
                    <span className={styles.text}>text</span>
                </li>
                <li>
                    <span className={styles.icon}>icon</span> 
                    <span className={styles.text}>text</span>
                </li>
                <li>
                    <span className={styles.icon}>icon</span> 
                    <span className={styles.text}>text</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer