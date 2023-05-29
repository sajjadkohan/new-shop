import React, { useContext, useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import Icon, { StarOutlined , StarFilled , TagFilled } from '@ant-design/icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';

import styles from '../styles/SliderProduct.module.css';
import Link from 'next/link';

import slide1 from '../images/slide1.webp';

import { SliderDataContext } from '../context/SliderProductContext';
import SwiperProduct from './smallComponents/SwiperProduct';

const Row3 = ({dataHomePage}) => {

    const [width , setWidth] = useState(0);

    const dataArr = ["1","2","3","4","5","6"];
  
    useEffect(()=> {
      setWidth(window.screen.width);
      // console.log("R O W 3",dataHomePage);
    },[])

    // console.log("R O W 3",dataHomePage);

  return (
    <div>
        <div className={styles.sliderProduct}>
        <h1 className={styles.titleLg}>Row3</h1>
        <div className={styles.parrentSlider}>
        <SwiperProduct data={dataArr}/>

    </div>
</div>
    </div>
  )
}

export default Row3

export async function getServerSideProps (ctx) {
  console.log("C T X",ctx);
  const res = await fetch(`http://localhost:4000/row2HomePage`);
  const data = await res.json();

  return {
      props : {
        dataHomePage : data
      }
    }

}