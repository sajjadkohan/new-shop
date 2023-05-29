import React, { useState } from 'react'
import styles from '../../styles/Cart.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faCartShopping, faLocation, faLocationDot, faRectangleList, faShoppingBasket, faWallet } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useRef } from 'react';

const Steps = ({status}) => {


let step1 =  <div className={styles.step}>
                <span className={styles.icon}> <FontAwesomeIcon icon={faCartShopping} /> </span>
                <span className={styles.text}>سبد خرید</span>
                <span className={styles.line}></span>
            </div>;

let step2 = <div className={styles.step}>
            <span className={styles.icon}> <FontAwesomeIcon icon={faLocationDot} /> </span>
            <span className={styles.text}>انتخاب آدرس و نوع ارسال</span>
            <span className={styles.line}></span>
            </div>

let step3 = <div className={styles.step}>
                <span className={styles.icon}> <FontAwesomeIcon icon={faLocationDot} /> </span>
                <span className={styles.text}>انتخاب آدرس و نوع ارسال</span>
                <span className={styles.line}></span>
            </div>

let step4 = <div className={styles.step}>
                <span className={styles.icon}> <FontAwesomeIcon icon={faWallet} /> </span>
                <span className={styles.text}>پرداخت</span>
                <span style={{display:'none'}} className={styles.line}></span>
            </div>

let step1A =  <div className={styles.step+' '+styles.active}>
<span className={styles.icon}> <FontAwesomeIcon icon={faCartShopping} /> </span>
<span className={styles.text}>سبد خرید</span>
<span className={styles.line+' '+styles.activeBackground}></span>
                </div>;

let step2A = <div className={styles.step+' '+styles.active}>
<span className={styles.icon}> <FontAwesomeIcon icon={faLocationDot} /> </span>
<span className={styles.text}>انتخاب آدرس و نوع ارسال</span>
<span className={styles.line+' '+styles.activeBackground}></span>
                </div>;

let step3A = <div className={styles.step+' '+styles.active}>
<span className={styles.icon}> <FontAwesomeIcon icon={faLocationDot} /> </span>
<span className={styles.text}>انتخاب آدرس و نوع ارسال</span>
<span className={styles.line+' '+styles.activeBackground}></span>
                </div>;

let step4A = <div className={styles.step+' '+styles.active}>
<span className={styles.icon}> <FontAwesomeIcon icon={faWallet} /> </span>
<span className={styles.text}>پرداخت</span>
<span style={{display:'none'}} className={styles.line}></span>
                </div>;

let step1S =  <div className={styles.step+' '+styles.success}>
<span className={styles.icon}> <FontAwesomeIcon icon={faCartShopping} /> </span>
<span className={styles.text}>سبد خرید</span>
<span className={styles.line+' '+styles.successBackground}></span>
                </div>;

let step2S = <div className={styles.step+' '+styles.success}>
<span className={styles.icon}> <FontAwesomeIcon icon={faLocationDot} /> </span>
<span className={styles.text}>انتخاب آدرس و نوع ارسال</span>
<span className={styles.line+' '+styles.successBackground}></span>
                </div>;

let step3S = <div className={styles.step+' '+styles.success}>
<span className={styles.icon}> <FontAwesomeIcon icon={faLocationDot} /> </span>
<span className={styles.text}>انتخاب آدرس و نوع ارسال</span>
<span className={styles.line+' '+styles.successBackground}></span>
                </div>;

let step4S = <div className={styles.step+' '+styles.success}>
<span className={styles.icon}> <FontAwesomeIcon icon={faWallet} /> </span>
<span className={styles.text}>پرداخت</span>
<span style={{display:'none'}} className={styles.line}></span>
                </div>;



const [stepArr,setStepArr]= useState([step1,step2,step3,step4]);

    const stepTag = useRef(null);
    let childStepArr = [];

    useEffect(()=> {


        console.log(step1);
        childStepArr = stepTag.current.childNodes;
        const newStatus = status-1;
        let newChildStepArr = [];
        console.log(childStepArr);

        switch (status) {
            case 1:
                setStepArr([step1A,step2,step3,step4]);
            break;

            case 2:
                setStepArr([step1S,step2A,step3,step4]);
            break;

            case 3:
                setStepArr([step1S,step2S,step3A,step4]);
            break;

            case 4:
                setStepArr([step1S,step2S,step3S,step4A]);
            break;

            default: return stepArr

        }

        // childStepArr[newStatus].lastChild.classList.add(styles.activeBackground);
        // childStepArr[newStatus].classList.add(styles.active);

        // const countCild = childStepArr.length

        // if(childStepArr[newStatus].previousSibling){
        //     childStepArr[newStatus].previousSibling.classList.add(styles.success)
        //     childStepArr[newStatus].previousSibling.lastChild.classList.add(styles.successBackground)
        // }


    },[])

  return (
    <div ref={stepTag} className={styles.steps+' '+'borderC'}>

        {stepArr}

    </div>
  )
}

export default Steps