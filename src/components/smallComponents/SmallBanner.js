import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from '../../styles/SmallBanner.module.css';
import bannerSm from '../../images/bannerLeft.jpg';
import OrderBtn from './OrderBtn';

const SmallBanner = (props) => {
  return (
    <div className={styles.smallBanner}>
            <div className={styles.textBanner}>
            <h1>{props.text}</h1>
              <OrderBtn text="خرید" background={props.btnColor? props.btnColor : "#f7661e"} href="/ss" />
            </div>
            <Image className={styles.imgTag} src={props.imageSrc?props.imageSrc:bannerSm} />

            <div className='card'>
              <div className='header'>
                <div className='text'>Pizza</div>
              </div>

              <div className='rowNew'>
                <div className='titleNew'>Margharita</div>
                <div className='titleNew'>Margharita</div>
                <div className='titleNew'>Margharita</div>
              </div>

            </div>
    </div>
  )
}

export default React.memo(SmallBanner);