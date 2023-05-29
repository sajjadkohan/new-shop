'use client';
import React from 'react'
import styles from '../../styles/Cart.module.css';
import ItemBasket from './ItemBasket';
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import PriceDisplay from './PriceDisplay';
import SmItemBasket from './SmItemBasket';

const MiniCart = ({visableProps}) => {

  const [productInCart,setProductInCart] = useState([
    {
      p_name : 'تبلت ماکروسافت مدل BWS 12GB',
      e_name : 'product_2',
      images : ['https://m.media-amazon.com/images/I/51Shbfz1QzL.jpg'],
      count  : 2,
      price : 1540000,      
    }
  ]);

  return (
    <>
        <div hidden={visableProps} className={styles.miniCart}>
      <div className={styles.header+' '+'dFlex'}>
        <span className={styles.quantity}>2 کالا</span>
        <Link legacyBehavior href='/cart' >
          <a>
            <span className={styles.text}>مشاهده سبد</span>
            <span className={styles.icon}><FontAwesomeIcon icon={faChevronLeft} /></span>
          </a>
        </Link>
      </div>
      <div className={styles.content}>
        <SmItemBasket data={productInCart} />
        <SmItemBasket data={productInCart} />
        <SmItemBasket data={productInCart} />
      </div>
      <div className={styles.footer+' '+'dFlex'}>
        <div className={styles.priceDiv}>
          <div className={styles.text}>مجموع قیمت</div>
          <PriceDisplay price='2300000' />
        </div>

        <div className={styles.btnParent}>
        <Link legacyBehavior href='/cart' >
          <a>
            <span className={styles.text+' '+styles.orderBtn}>ثبت سفارش</span>
          </a>
        </Link>
        </div>

      </div>
    </div>
    </>
  )
}

export default MiniCart