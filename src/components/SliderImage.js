'use client';
import React, { useContext, useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation , Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '../styles/SliderImage.module.css';
import Link from 'next/link';
import Image from 'next/image';
import slide1 from '../../images/slide1.webp';
import slide2 from '../../images/slide2.webp';

import smImage1 from '../../images/watch2.png';
import smImage2 from '../../images/watch1.jpg';
import smImage3 from '../../images/watch3.png';
import bigImage from '../../images/watch4.png';


const SliderImage = () => {


  const brandTag = useRef();
  const TitleTag = useRef();
  const descTag = useRef();

  // const myState = useContext(CartContext);

  return (
    <div>
      {/* <h1>{myState.nameUser}</h1> */}
          <Swiper className={styles.sliderImage+' '+'mySwiper'}
          effect={"fade"}    
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={true}
      scrollbar={{ draggable: true }}
      modules={[Navigation,EffectFade,Pagination]}
      autoplay="true"
      loop="true"
      onSlideChange={() => {
        brandTag.current.classList.toggle(styles.animClass);
        // console.log(TitleTag.current);
        TitleTag.current.classList.toggle(styles.animClas);
        descTag.current.classList.toggle(styles.animClas2);
      }}
      onSwiper={(swiper) => console.log()}
    >
      <SwiperSlide>
       <div className={styles.slideparent}>
          <div className={styles.left}>
            <div className={styles.lgImage}>
            <Image alt='bigImage' width={600} height={600} src={bigImage} />
            </div>

            <div className={styles.smImage}>
              <Link legacyBehavior href="/sss">
              
            <Image className={styles.smImageTag} width={200} height={200} alt='imageSmall' src={smImage1} />
                
              </Link>
              <Link legacyBehavior href="/sss">
              
            <Image className={styles.smImageTag} width={200} height={200} alt='imageSmall' src={smImage3} />
                
              </Link>
              <Link legacyBehavior href="/sss">
              
            <Image className={styles.smImageTag} width={200} height={200} alt='imageSmall' src={smImage1} />
                
              </Link>
            </div>


          </div>
          <div className={styles.right}>
              <div className={styles.textSection}>
                <p ref={brandTag} className={styles.brand}>WALAR</p>
                <h2 ref={TitleTag} className={styles.title}>
                ساعت های سه موتوره<br/>  جذاب و 
                <span className={styles.pinkColor}> لوکس </span> 
                </h2>
                <div ref={descTag} className={styles.desc}>
                  <p className={styles.itemDesc}>تضمین اصالت</p>
                  <p className={styles.itemDesc}>مطمعن در کیفیت</p>
                  <p className={styles.itemDesc}>زیبایی منحصر به فرد</p>
                </div>
                <button className={styles.btnOrder}>ثبت سفارش</button>
              </div>
          </div>
       </div>
            


      </SwiperSlide>

      <SwiperSlide>
       <div className={styles.slideparent}>
          <div className={styles.left}>
            <div className={styles.lgImage}>
            <Image alt='bigImage' width={600} height={600} src={bigImage} />
            </div>

            <div className={styles.smImage}>
              <Link legacyBehavior href="/sss">

            <Image className={styles.smImageTag} width={200} height={200} alt='imageSmall' src={smImage1.src} />

              </Link>
              <Link legacyBehavior href="/sss">

            <Image className={styles.smImageTag} width={200} height={200} alt='imageSmall' src={smImage3.src} />
   
              </Link>
              <Link legacyBehavior href="/sss">
               
            <Image className={styles.smImageTag} width={200} height={200} alt='imageSmall' src={slide2.src} />
                
              </Link>
            </div>


          </div>
          <div className={styles.right}>
              <div className={styles.textSection}>
                <p ref={brandTag} className={styles.brand}>WALAR</p>
                <h2 ref={TitleTag} className={styles.title}>
                ساعت های سه موتوره<br/>  جذاب و 
                <span className={styles.pinkColor}> لوکس </span> 
                </h2>
                <div ref={descTag} className={styles.desc}>
                  <p className={styles.itemDesc}>تضمین اصالت</p>
                  <p className={styles.itemDesc}>مطمعن در کیفیت</p>
                  <p className={styles.itemDesc}>زیبایی منحصر به فرد</p>
                </div>
                <button className={styles.btnOrder}>ثبت سفارش</button>
              </div>
          </div>
       </div>
            


      </SwiperSlide>


    </Swiper>
    </div>
  )
}

export default React.memo(SliderImage);