'use client';
import React from 'react';
// import styles from '../../styles/smallComponents/ChildTabStyle.module.css'
import styles from '../../styles/TabStyle.module.css';

export const MoreDetails = (props) => {
  return (
    <div 
    id={props.titleEN} className={styles.pageTab}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.decsription}</div>
    </div>
  )
}
