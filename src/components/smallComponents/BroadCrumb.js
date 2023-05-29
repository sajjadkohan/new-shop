'use client';
import React from 'react'
import styles from '../../styles/smallComponents/BreadCrumb.module.css';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

const BroadCrumb = (props) => {
  return (
    <div className={styles.breadCrumb}>

      {
        // console.log(props.value)
      props.value&&
      props.value.map(item => <Breadcrumb 
        key={item.id}
        items={[
          {
            title: <Link legacyBehavior className={styles.breadCrumbLink}  href={`${item.id}`}><div>{item.title} / </div></Link>,
          },
          
        ]}
        /> )
      }
    </div>
  )
}

export default BroadCrumb