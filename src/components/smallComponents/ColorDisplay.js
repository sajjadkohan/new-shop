import React from 'react'
import styles from '../../styles/Product.module.css';

const ColorDisplay = (props) => {
  return (
    <div className={styles.colorDisplay}>
        <span onClick={props.onClick} className={styles.circle} style={{backgroundColor : props.color}} ></span>
    </div>
  )
}

export default ColorDisplay