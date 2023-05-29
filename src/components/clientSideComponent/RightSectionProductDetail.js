'use client';
import { Image, Skeleton } from 'antd';
import React from 'react'
import Zoom from 'react-img-zoom';
//styles
import styles from "../../styles/Product.module.css";
import pStyles from "../../styles/Public.module.css";
import { API_BASE } from '../../../constanst';

const RightSectionProductDetail = ({data}) => {
  return (
    <div className={pStyles.col4 + " " + styles.imageBox}>
    <div className={pStyles.col12}>
        <div className={styles.parentimage}>
        {
          data.images[0]
          ?
          <Zoom 
          img={`${API_BASE}/${data.images[0]}`}
          zoomScale={2}
          height={500}
          width={600}
          />
          :
          <Skeleton.Image active={'true'} />
        }

        </div>
    </div>

    <div className={styles.thunbnainsImages}>

        <Image.PreviewGroup>
          {
            data.images?
            data.images.map(img => {
              console.log(img);
              return(
                <div key={img} className={styles.parentimage}>
                  
                  
                  <Image 
                  alt='image' 
                  
                  src={`${API_BASE}/${img}`} />
                </div>
              )
            }) 
            :
            <Skeleton.Image active={'true'} />
          }

      </Image.PreviewGroup>
    </div>

 </div>
  )
}

export default RightSectionProductDetail
