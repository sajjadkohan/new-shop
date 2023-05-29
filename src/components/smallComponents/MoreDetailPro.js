'use client';
import React from 'react'
import styles from '../../styles/TabStyle.module.css';

// اطلاعات هر محصول مانند مشخصات فنی محصول یا اطلاعات بیشتر یا . . .
// به صورت یک ابجکت به شکل زیر باید از سرور دریافت شود
//              
//{
//  "title" : "توضیحات بیشت",
//  "description" : "با سلام دبل این ساب هارو با آمپ مونو la1000 لئودئو درایو کردم تو یک اهم کامل داره پر میکنه با باتری اضافی و یه باکس صد لیتر پورتد این ساب بیس دقیق و متمایل
// به کیک خشک داره و پرتاب صداش 
//زیاده ساخت ویتنام هم هست"
//},

const MoreDetailPro = (props) => {
  return (
    <div>
      <div 
      id={props.titleEN} className={styles.pageTab}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.row}>
            {
                props.row&&props.row.map(item => {
                return(
                 <div className={styles.itemRow} key={item.name}>
                  <span className={styles.titleRow}>{item.name}</span>
                  <span className={styles.descRow}>{item.value}</span>
                 </div>
                )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default MoreDetailPro