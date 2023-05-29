'use client';
import React, { useContext } from 'react'
import styles from '../../styles/CounterBox.module.css';
import {PlusOutlined , MinusOutlined} from '@ant-design/icons';
import { newCartCTX } from '../../context/NewCartCtx';

const CounterBox = ({data,place}) => {

  const {getProductById,addToCart,deleteQuantity,addQuantity,count,loading,error} = useContext(newCartCTX);

  return (
    <div className={styles.counterBox}>

      <div className={styles.content}>
      <button title='یکی بیشتر بخر' onClick={ () => {
          addQuantity({
            'modes' : JSON.stringify(data.modes),
            'productId' : data._id
          })
        }} className={styles.counterBtn}><PlusOutlined />
        </button>

        <span className={styles.counterDisplay}>{count}</span>

        <button onClick={() => {
          deleteQuantity({
              'modes' : JSON.stringify(data.modes),
              'productId' : data._id,
            });
        }}
        className={styles.counterBtn}><MinusOutlined />
        </button>
        
      {
        count>0&&<div className='w100'>{place&&<span className={styles.textCounter}>موجود در سبد خرید شما</span>}</div>
      }
      </div>


    </div>
  )
}

export default CounterBox