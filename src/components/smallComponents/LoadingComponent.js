import React from 'react'
import styles from '../../styles/smallComponents/LoadingComponent.module.css';

const LoadingComponent = () => {
  return (
    <div className={styles.parentLoading}>
        <div class={styles.ldsRipple}><div></div><div></div></div>
    </div>
  )
}

export default LoadingComponent