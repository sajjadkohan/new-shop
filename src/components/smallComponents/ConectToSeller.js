'use client';
import React from 'react'
import styles from '../../styles/smallComponents/ConectToSeller.module.css'
import {PhoneFilled } from '@ant-design/icons';

const ConectToSeller = () => {
  return (
    <div className={styles.conectToSeller}>
      <div className={styles.text}>ارتباط با فروشنده</div>
      <div className={styles.icon}><PhoneFilled/></div>
    </div>
  )
}

export default ConectToSeller