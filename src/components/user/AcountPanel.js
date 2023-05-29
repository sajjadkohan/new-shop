import React from 'react'
import styles from '../../styles/UserPanel.module.css';

const AcountPanel = () => {
  return (
    <div className={styles.accountPage}>
        <div className={styles.right}>
            <input className={styles.input_panel} onChange={(e)=> console.log(e.target.value)} placeholder='نام و نام خانوادگی' defaultValue='سجاد کهن' />
            <input className={styles.input_panel} placeholder='ایمیل' />
        </div>

        <div className={styles.left}>
        <input className={styles.input_panel} onChange={(e)=> console.log(e.target.value)} placeholder='کد ملی' />
        <input className={styles.input_panel} onChange={(e)=> console.log(e.target.value)} placeholder='شماره موبایل' />
        </div>

        <button className={styles.saveBtn}> <span>ذخیره</span> </button>

    </div>
  )
}

export default AcountPanel;