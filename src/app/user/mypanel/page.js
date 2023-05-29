'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import styles from '../../../styles/UserPanel.module.css';
import { Radio, Space, Tabs } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// fontawesome
import { faCoffee,fa6,faHeart,faShoppingBasket,faAddressBook,faUserCircle,faAddressCard } from '@fortawesome/free-solid-svg-icons'
import AcountPanel from '@/components/user/AcountPanel';
import AddressPage from '@/components/smallComponents/AddressPage';
import Head from 'next/head';



const items = [
  {
    key: '1',
    label: <div className={styles.itemTab}>
       <span className={styles.text}>اطلاعات کاربری</span>
       <span className={styles.icon}><FontAwesomeIcon icon={faUserCircle} /></span>
      </div>,
    children: <div className={styles.panelPage}>
      <AcountPanel/>
    </div>,
  },
  {
    key: '2',
    label: <div className={styles.itemTab}>
    <span className={styles.text}>آدرس ها</span>
    <span className={styles.icon}><FontAwesomeIcon icon={faAddressCard} /></span>
   </div>,
    children: <div>
    <AddressPage/>
    </div>,
  },
  {
    key: '3',
    label: <div className={styles.itemTab}>
    <span className={styles.text}>سفارش ها</span>
    <span className={styles.icon}><FontAwesomeIcon icon={faShoppingBasket} /></span>
   </div>,
    children: `Content of Tab Pane 3`,
  },
  {
    key: '4',
    label: <div className={styles.itemTab}>
    <span className={styles.text}>مورد علاقه</span>
    <span className={styles.icon}><FontAwesomeIcon icon={faHeart} /></span>
   </div>,
    children: `Content of Tab Pane 4`,
  }
]


const UserPanel = () => {


  return (
    <div className={styles.userPanel+" "+"userpanel"}>
        <Header/>
        <Head>
          <title>پنل کاربری | مدیریت حساب کاربری</title>
          <meta name='description' content='مدیریت حساب کاربری : ایجاد و ویرایش ادرس و مشخصات فردی' />
        </Head>
        <div className='container'>
        <>

      <Tabs
        tabPosition={'right'}
        defaultActiveKey='2'
        items={items}
        tabBarStyle={{color:'#505050',width:'220px',paddingBottom:'3vw'}}
      />
    </>
          user panel
        </div>
    </div>
  )
}

export default UserPanel