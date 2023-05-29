"use client";
import React from 'react'
//styles
import styles from "../../styles/Product.module.css";
import pStyles from "../../styles/Public.module.css";
import { Select } from 'antd';
import FreeDeliveryBox from '../smallComponents/FreeDeliveryBox';

const CenterSectionProductDetail = ({data}) => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };

  return (
    <div className={pStyles.col5+" "+styles.textBox}>
    <h1 className={styles.title + " " + "irBOLD"}>{data.p_name}</h1>

    <div className={styles.vizhegiParent}>
        <h2 className='irMEDIUM'>ویژگی ها</h2>
        <div className={styles.content}>

          {/* {
            data.vishegiha.map(vizhegi => {
              return(
                <div className={styles.vizhegiRow}>
                  <span className={styles.icon}><span className={styles.circleIcon}></span></span>
                  <span className={styles.titleSm}>{vizhegi.name}</span>
                  <span className={styles.descSm}>{vizhegi.value}</span>
              </div>
              )
            })
          } */}

        </div>
    </div>

    <div className={styles.colorParent}>
        <div className={styles.titleDiv}>
        <h2 className='irMEDIUM'>: رنگ</h2>
        <span className={styles.colorSpan}> مشکی</span>
        </div>
        <div className={styles.content}>
            
        <div className={'rowFlex'}>
            <div className={styles.colorDisplay}>
                {/* <span onClick={selectColor} ref={colorTag} className={styles.circle} style={{backgroundColor : "black"}} ></span> */}
            </div>

            <div className={styles.colorDisplay}>
                {/* <span onClick={selectColor} ref={colorTag} className={styles.circle} style={{backgroundColor : "blueviolet"}} ></span> */}
            </div>

        </div>

        </div>
    </div>

    <div className={styles.vizhegiParent}>

        {/* {
          
          Object.keys(JSON.parse(productData.data[0].modes)).map((item,index)=> {
            return <p>{item}</p>
            // return <ItemModes title={item} value={Object.values(JSON.parse(productData.data[0].modes))[index]} />
          })
        } */}

        <h2 className='irMEDIUM'>ویژگی ها</h2>
        <div className={styles.content}>
        <Select className={styles.selectTag}
      defaultValue="انتخاب گارانتی"
      style={{
        width: '100%',
        borderRadius : '6px'
      }}
      onChange={handleChange}
      options={[
        {
          value: 'گارانتی اول',
          label: 'گارانتی اول',
        },
        {
          value: 'مگا گارانتی',
          label: 'مگا گارانتی',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
        </div>
    </div>

    <div className={'rowFlex flexWrap'}>
    {/* <ItemModes/> */}



    <Select className={styles.selectTag}
      defaultValue="انتخاب گارانتی"
      style={{
        width: '100%',
        borderRadius : '6px'
      }}
      onChange={handleChange}
      options={[
        {
          value: 'گارانتی اول',
          label: 'گارانتی اول',
        },
        {
          value: 'مگا گارانتی',
          label: 'مگا گارانتی',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />

    </div>


    <div className={styles.counterParent}>
        <div className={styles.content}>
            
        <div className={'rowFlex'}>
           {/* در صورتی که محصول ارسال رایگان داشته باشد 
          باید کامپوننت زیر نمایش داده شود */}
            <FreeDeliveryBox/>
        </div>

        </div>
    </div>

 </div>
  )
}

export default CenterSectionProductDetail
