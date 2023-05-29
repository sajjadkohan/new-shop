import React from 'react';
import Link from 'next/link';
import styles from '../../styles/OrderBtn.module.css';

const OrderBtn = (props) => {
  return (
    <div className={styles.orderBtnParrent} style={{textAlign : props.btnPosition?props.btnPosition : 'center'}}>
        <Link legacyBehavior href={props.href}>
            <a style={{backgroundColor : props.background?props.background : '#f7661e',color : props.textColor}}
             className={styles.orderBtn} 
             >{props.text?props.text : 'خرید'}</a>
        </Link>
    </div>
  )
}

export default OrderBtn