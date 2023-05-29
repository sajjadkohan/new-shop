'use client';
import React from 'react'
import styles from '../../styles/Product.module.css';

const CommentDisplay = () => {
  return (
    <div className={styles.commentDisplay}>
      <div className={styles.header}>
        <div className={styles.right}>
          <span className={styles.icon}>icon</span>
          <span className={styles.text}>name</span>
        </div>
        <div className={styles.left}>
        <span className={styles.date+" "+ 'irLight'}>24 آبان 1401</span>
        <span className={styles.rate}>
          <span className={styles.svgStar}>
            <svg strokeWidth='25' height="23" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1788 0.660115C10.294 0.30557 10.7956 0.305571 10.9108 0.660114L12.8565 6.64834C12.9521 6.9428 13.2265 7.14217 13.5362 7.14217H19.8325C20.2053 7.14217 20.3603 7.61921 20.0587 7.83833L14.9649 11.5393C14.7144 11.7212 14.6096 12.0438 14.7052 12.3383L16.6509 18.3265C16.7661 18.6811 16.3603 18.9759 16.0587 18.7568L10.9649 15.0558C10.7144 14.8738 10.3752 14.8738 10.1247 15.0558L5.03081 18.7568C4.72922 18.9759 4.32343 18.6811 4.43862 18.3265L6.38432 12.3383C6.47999 12.0438 6.37518 11.7212 6.1247 11.5393L1.03081 7.83833C0.729214 7.61921 0.884212 7.14217 1.257 7.14217H7.55339C7.86301 7.14217 8.13742 6.9428 8.23309 6.64834L10.1788 0.660115Z" fill="#FBC814" stroke="#EDAB00" strokeWidth="0.329851"/>
            </svg>
          </span>
          <span className={styles.text}>3</span>
        </span>
          
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text+" "+'irMEDIUM'}>
        با سلام دبل این ساب هارو با آمپ مونو la1000 لئودئو درایو کردم تو یک اهم کامل داره پر میکنه با باتری اضافی و یه باکس صد لیتر پورتد این ساب بیس دقیق و متمایل به کیک خشک داره و پرتاب صداش زیاده ساخت ویتنام هم هست
        </p>
      </div>
    </div>
  )
}

export default CommentDisplay