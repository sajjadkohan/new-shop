'use client';
import React from 'react'
import styles from '../../styles/FreeDeliveryBox.module.css';

const FreeDeliveryBox = () => {
  return (
    <div className={styles.freeDeliveryBox}>
        <div className={styles.right}>ارسال رایگان برای این کالا</div>
        <div className={styles.left}>
            <span className={styles.trackImage}></span>
        </div>
    </div>
  )
}

export default FreeDeliveryBox