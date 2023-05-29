'use client';
import React from 'react'
import styles from "../../styles/ItemBasket.module.css";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faShield, faShop } from '@fortawesome/free-solid-svg-icons';
import CounterBox from './CounterBox';
import PriceDisplay from './PriceDisplay';


const SmItemBasket = ({data}) => {

    const newData = data[0];

  return (
    <div className={styles.SmItemBasket}>
        <div className={styles.right}>

            <Link legacyBehavior href={'dd'}>
            <img className={styles.thumbImg} src={newData.images[0]} />
            </Link>
            <div className={styles.actionsDiv}>

                
            </div>
        </div>
        <div className={styles.left}>
            <div className={styles.title+' '+'irBOLD'}>{newData.p_name}</div>

            <div className={styles.vizhegiha}>

            <div className={styles.row+' '+styles.color}>
                <span className={styles.colorDisplay+' '+styles.icon} style={{background : "#ccc"}}></span>
                <span className={styles.text}>خاکستری</span>
            </div>

            </div>
            <div className={styles.row}>
           
            </div>
            
            <p>{data.description}</p>
        </div>

        <div className={styles.row+' '+' '+'w100'+' '+'dFlex'}>
            <div className={styles.rightBottom}>
                <div className={styles.counter}>
                    <CounterBox place={true}/>
                </div>
            </div>
            <div className={styles.leftBottom}>
                <div className={styles.price+' '+'irBOLD'}><PriceDisplay price={newData.price}/></div>
            </div>
            
        </div>

    </div>
  )
}

export default SmItemBasket