'use client';
import React, { useContext } from 'react'
import styles from '../../styles/AddToBasketBtn.module.css';
import {newCartCTX} from '../../context/NewCartCtx';
import toast, { Toaster } from 'react-hot-toast';
import { all } from 'axios';
import Spinner from './Spinner';


const AddToBasketBtn = ({data}) => {

  const {getProductById,addToCart,loading,error} = useContext(newCartCTX);


  return (
    <>
    <Toaster/>
    <button onClick={()=> {
      getProductById(data._id);
      // console.log(data);
      error&& toast.error(error);
      console.log(data.modes.length);
      addToCart({
        'p_name' : data.p_name,
        'e_name' : data.e_name,
        'modes' : JSON.parse(data.modes),
        'count' : '1',
        'priceAsli' : data.priceAsli,
        'productId' : data._id
      });
    }} className={styles.addBtn}>
      {
      loading?
      <span><Spinner/></span>
      :
      <span>افزودن به سبد خرید</span>
    }
    </button>
    </>
  )
}

export default AddToBasketBtn