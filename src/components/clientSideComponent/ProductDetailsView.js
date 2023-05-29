"use client";
import React, { useContext, useEffect, useState } from 'react'
import FreeDeliveryBox from '../smallComponents/FreeDeliveryBox';
import { Image, Modal, Select, Skeleton, Slider } from 'antd';
import Zoom from 'react-img-zoom';
import BroadCrumb from '../smallComponents/BroadCrumb';

//styles
import styles from "../../styles/Product.module.css";
import pStyles from "../../styles/Public.module.css";
import { API_BASE } from '../../../constanst';
import CardInformation from '../smallComponents/CardInformation';
// import Link from 'next/link';
import { Link, animateScroll as scroll } from "react-scroll";
import { MoreDetails } from '../smallComponents/MoreDetails';
import MoreDetailPro from '../smallComponents/MoreDetailPro';
import RateDisplay from '../smallComponents/RateDisplay';
import CommentDisplay from '../smallComponents/CommentDisplay';
import RightSectionProductDetail from './RightSectionProductDetail';
import CenterSectionProductDetail from './CenterSectionProductDetail';
import MoreDetailsProductDetail from './MoreDetailsProductDetail';

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

const ProductDetailsView = ({data}) => {

    // const [cookies, setCookie] = useCookies();

    //context
    // const {setProduct,activeProduct} = useContext(ProductContext);
  



    useEffect(()=> {
        console.log(data);
    },[])

  return (
    <div className={styles.page}>
        <BroadCrumb value={data.parents}/>
        <div className={styles.productPage}> {/*start*/}

        <RightSectionProductDetail data={data} />
        <CenterSectionProductDetail data={data} />

         <div className={pStyles.col3 + " " + styles.textBox}>
           <CardInformation data={data} />
         </div>

         <MoreDetailsProductDetail data={data} />

        </div> {/*end*/}

    </div>
  )
}

export default ProductDetailsView
