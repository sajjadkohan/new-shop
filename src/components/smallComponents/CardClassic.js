'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react'
import styles from '../../styles/CardClassic.module.css';
import OrderBtn from './OrderBtn';

const CardClassic = (props) => {



  useEffect(()=> {

  },[])

  return (
    <div className={styles.CardClassic}>
      <Link legacyBehavior href='/'>
        <div>
          <div className={styles.textBanner}>
          <h1>{props.text}</h1>
          </div>
          <img alt='imageTransparent' className={styles.imgTag} src={props.srcImage} />
        </div>
      </Link>
    </div>
  )
}

export default React.memo(CardClassic);

CardClassic