import React from 'react'
import styles from "../../styles/CardOfficial.module.css";

import noPhoto from "../../../images/no-photo.png";
import Link from 'next/link';

const CardOfficial = ({srcImage , text , textAlign}) => {
  return (
    <div className={styles.cardOfficial}>
        <div className={styles.image}>
            <img alt='image' className={styles.imageUp} src={srcImage?srcImage :noPhoto.src} />
            <img alt='image' className={styles.backImg} src={srcImage?srcImage :noPhoto.src} />
        </div>
        <div style={{textAlign : textAlign}} className={styles.textBanner}>
            <span>{text}</span>
        </div>
        <div style={{textAlign : textAlign}} className={styles.parentBtn}>
        <button className={styles.btn1+' '+'btn_1'}>
        <Link href={'/'}><div>کلیک کن</div></Link>
        </button>
        </div>

    </div>
  )
}

export default CardOfficial