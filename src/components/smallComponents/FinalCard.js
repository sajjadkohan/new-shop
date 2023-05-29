import React from 'react'
import styles from '../../styles/Cart.module.css';

const FinalCard = () => {
  return (
    <div className={styles.cartFinal+' '+'borderC'}>
        <div className={styles.header}><div>سبد خرید نهایی</div></div>
        <div className={styles.row+' '+'dFlex'}>
            <span className='irLight'>تعداد کالا ها :</span>
            <span className='irLight'>(4)</span>
        </div>

        <div className={styles.row+' '+'dFlex'+' '+styles.totalCart}>
            <span className={styles.totalCart}>جمع سبد خرید :</span>
            <span className={styles.totalCart}>23000</span>
        </div>

        <div className={styles.row+' '+'dFlex'+' '+styles.totalDiscount}>
            <span className={'irLight'+' '+styles.totalDiscount}>سود شما از این خرید :</span>
            <span className={'irLight'+' '+styles.totalDiscount}>23000</span>
        </div>

        <div className={styles.row}>
            <button className={styles.btnRed+' '+'orderBtn'}>ثبت سفارش</button>
        </div>

    </div>
  )
}

export default FinalCard