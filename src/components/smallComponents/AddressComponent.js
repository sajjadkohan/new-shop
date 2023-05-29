import React from 'react'
import styles from '../../styles/Address.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// fontawesome
import {  faCity ,faDeleteLeft,faEdit,faPhone, faSignsPost, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'


const AddressComponent = () => {
  return (
    <div className={styles.addressComponent}>
      <div className={styles.head}>
        <div className={styles.title}>شریف آباد - بلوار اتحاد</div>
        <div className={styles.action}>
          <button className={styles.delete}><FontAwesomeIcon icon={faTrash} /></button>
          <button className={styles.edit}><FontAwesomeIcon icon={faEdit} /></button>
        </div>
      </div>
      <div className={styles.content+' '+'dFlex'}>
        <div className={styles.left}>map</div>

        <div className={styles.right}>
          <div className={styles.row}>
            <span className={styles.icon}><FontAwesomeIcon icon={faCity} /></span>
            <span className={styles.text}>شیراز</span>
          </div>

          <div className={styles.row}>
            <span className={styles.icon}><FontAwesomeIcon icon={faSignsPost} /></span>
            <span className={styles.text}>715512310</span>
          </div>

          <div className={styles.row}>
            <span className={styles.icon}><FontAwesomeIcon icon={faPhone} /></span>
            <span className={styles.text}>09399819093</span>
          </div>

          <div className={styles.row}>
            <span className={styles.icon}><FontAwesomeIcon icon={faUser} /></span>
            <span className={styles.text}>سجاد کهن</span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AddressComponent;