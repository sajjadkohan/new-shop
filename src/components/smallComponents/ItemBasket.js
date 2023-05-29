import React, { useContext } from 'react'
import styles from "../../styles/ItemBasket.module.css";
// import image1 from "../../images/1.webp"

import { CartContext } from '../../context/CartCtx';
import CounterBox from '../smallComponents/CounterBox.js'
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// fontawesome
import { faChevronLeft, faCoffee,faShield, faShop } from '@fortawesome/free-solid-svg-icons'


const ItemBasket = ({data}) => {

  const {state,dispatch} = useContext(CartContext);
// console.log(data);

const newData = data[0];

  return (
    <div className={styles.itemBasket+' '+'borderC'+' '+'radius12'}>
        <div className={styles.right}>

            <Link legacyBehavior href={'dd'}>
            <img className={styles.thumbImg} src={newData.images[0]} />
            </Link>
            <div className={styles.actionsDiv}>
                <div className={styles.counter}>
                  <CounterBox place={false}/>
                </div>
                
            </div>
        </div>
        <div className={styles.left}>
            <div className={styles.title+' '+'irBOLD'}>{newData.p_name}</div>

            <div className={styles.vizhegiha}>

              <div className={styles.row+' '+styles.color}>
                <span className={styles.colorDisplay+' '+styles.icon} style={{background : "#ccc"}}></span>
                <span className={styles.text}>خاکستری</span>
              </div>

              <div className={styles.row+' '+styles.waranty}>
                <span className={styles.icon}><FontAwesomeIcon icon={faShield}/></span>
                <span className={styles.text}>گارانتی 18 ماه پیکسل</span>
              </div>

              <div className={styles.row+' '+styles.waranty}>
                <span className={styles.icon}><FontAwesomeIcon icon={faShop}/></span>
                <span className={styles.text}>موجود در انبار</span>
              </div>

            </div>
            <div className={styles.row}>
              <div className={styles.price+' '+'irBOLD'}>{newData.price}</div>
            </div>
            
            <p>{data.description}</p>
        </div>

        <div className={styles.row+' '+'w100'}>
          <div className={styles.bottomRow}>
            <Link legacyBehavior className='dFlex' href={'sldfg'}>
              <a>
              <span className={styles.text}>مشاهده محصول</span>
              <span className={styles.icon}><FontAwesomeIcon icon={faChevronLeft} /></span>
              </a>

            </Link>
          </div>
        </div>

    </div>
  )
}

export default ItemBasket