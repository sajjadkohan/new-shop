'use client';
import React, { useState } from 'react'
import RateDisplay from '../smallComponents/RateDisplay';
import { Modal, Slider } from 'antd';
import CommentDisplay from '../smallComponents/CommentDisplay';
import { MoreDetails } from '../smallComponents/MoreDetails';
import MoreDetailPro from '../smallComponents/MoreDetailPro';
import { Link } from 'react-scroll';
//styles
import styles from "../../styles/Product.module.css";
import pStyles from "../../styles/Public.module.css";
import tabStyles from '../../styles/TabStyle.module.css';

const MoreDetailsProductDetail = ({data}) => {

        // modal
        const [isModalOpen, setIsModalOpen] = useState(false);
        const showModal = () => {
          setIsModalOpen(true);
        };
        const handleOk = () => {
          setIsModalOpen(false);
        };
        const handleCancel = () => {
          setIsModalOpen(false);
        };
      
        const sendComment = () => {
          setTimeout(() => {
            setIsModalOpen(false);
          }, 500);
        }
      
        // modal
      
        // slider
        const marks = {
          0:  {
            style: {
              color: '#8f8f8f',
            },
            label: <strong>بسیار ضعیف</strong>,
          },
          1:  {
            style: {
              color: '#8f8f8f',
            },
            label: <strong>ضعیف</strong>,
          },
          2:  {
            style: {
              color: '#8f8f8f',
            },
            label: <strong>متوسط</strong>,
          },
          3:  {
            style: {
              color: '#8f8f8f',
            },
            label: <strong>خوب</strong>,
          },
          4:  {
            style: {
              color: '#8f8f8f',
            },
            label: <strong>عالی</strong>,
          },
        };
      
        const getValueSlider = (e) => {
          console.log(e[0]);
        }
      
        // slider

  return (
    <div className={styles.more}>
    <div className={tabStyles.tabBox}>
     <ul className={tabStyles.tabUl}>
       <li className={tabStyles.tabItem}>
     <Link
         
           activeClass={tabStyles.active}
           to="tozuhate_bishtar"
           spy={true}
           smooth={true}
           offset={-70}
           duration={100}
         >
           توضیحات بیشتر
         </Link>
         </li>
       <li className={tabStyles.tabItem}>
       <Link
           activeClass={tabStyles.active}
           to="moshakhasate_mahsul"
           spy={true}
           smooth={true}
           offset={-70}
           duration={100}
       >
         مشخصات محصول
       </Link>
       </li>
       <li className={tabStyles.tabItem}>
       <Link
           activeClass={tabStyles.active}
           to="nazarat"
           spy={true}
           smooth={true}
           offset={-70}
           duration={100}
       >
         نظرات
       </Link>
       </li>
     </ul>
   </div>

   <div className={styles.content}>
     <MoreDetails title="توضیحات بیشتر" titleEN="tozuhate_bishtar" decsription={data.description}/>
     <MoreDetailPro title="مشخصات محصول" titleEN="moshakhasate_mahsul" row={data.vishegiha} />
     <div id='nazarat' className={styles.commentsBox}>
       <div className={styles.title}>نظرات</div>
       <div className={styles.content}>
       <div className={styles.right}>
         <div className={styles.commentCard}>
           <RateDisplay rateValue={3.4}/>
           <p className={styles.text}>دیدگاه خود را درباره این محصول ثبت کنید</p>
           <button onClick={showModal} className={styles.saveComment}>ثبت دیدگاه</button>
           <Modal
           footer={[]}
           className={styles.modal} title="دید گاه خود را درباره این محصول ثبت کنید"
            open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
             <div className={styles.slider}>
                 <Slider onChange={getValueSlider} max={4} range marks={marks} defaultValue={5} />
             </div>
             <textarea placeholder='نظر شما درباره این محصول ؟' className={styles.textArea}>

             </textarea>
             <button onClick={sendComment} className={styles.saveComment}>ارسال</button>
           </Modal>
         </div>
       </div>
       <div className={styles.left}>
         <CommentDisplay/>
         <CommentDisplay/>
         <CommentDisplay/>
       </div>
       </div>
     </div>
   </div>

    </div>
  )
}

export default MoreDetailsProductDetail
