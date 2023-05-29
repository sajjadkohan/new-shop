import React, { useContext, useEffect, useState } from 'react'
import pStyles from '../../styles/Public.module.css';
import styles from '../../styles/Login.module.css';
import Link from 'next/link';

// context
import { AuthContext } from '../../context/AuthCtx';
import { validationLogin } from '../../../functions/validation';
import LoadingComponent from '../smallComponents/LoadingComponent';

const PhoneField = () => {

    // context
    const {getOtpCode,sendOtpCode,sendOtp,reSendOtp,isLogin,loading,numberPhone} = useContext(AuthContext)

    const [data , setData] = useState({
        mobile : '09925647155',
        code : undefined
    });
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});

    useEffect(()=> {
        setErrors(validationLogin(data))
    },[data])

    const changeHandler = (event) => {
        setData(
            {...data,
            [event.target.name] : event.target.value
            }
        )
        console.log(data);
    }

    const touchHandler = e => {
        setTouched({
            ...touched,[e.target.name] : true
        })
    }

  return (
    <>
    {
        loading?
        <LoadingComponent/>
        :
        <></>
    }
        <div className={styles.loginBox}>
                <h1 className={styles.headTitle}>ورود<span></span>ثبت نام</h1>
                <p className={styles.desc}>..کاربر عزیز لطفا شماره خود را وارد کنید</p>
                <form>
                <input name="mobile" type='number' value={data.mobile} className={errors.mobile?  touched.mobile? styles.numberInput + " " + styles.errorStyle  : styles.numberInput : styles.numberInput}
                 onChange={changeHandler} placeholder='0912. . . . . . .' onFocus={touchHandler} />
                {errors.mobile&& touched.mobile && <span className={styles.errorStyle}>{errors.mobile}</span>}
                
                {
                    errors.mobile? 
                    <button disabled={true} onClick={() => sendOtpCode(data.mobile)} className={styles.enterBtn + " " + styles.disabledBtn}>disableورود</button>
                    :
                    <button onClick={(e) => {
                        e.preventDefault();
                        getOtpCode(data.mobile);
                        // setShowTage({codeTag : true})
                    }} className={styles.enterBtn}>ورود</button>
                }
                
                </form>
                <p className={styles.terms}>
                    ورود شما به معنای پذیرش 
                     <Link legacyBehavior href='2f/ss'>
                        <a> قوانین حریم خصوصی </a>
                        </Link> 
                    و
                     <Link legacyBehavior href='dff/ss'> 
                      <a> شرایط ما</a> 
                      </Link> 
                      میباشد 
                </p>
            </div>
    </>
  )
}

export default PhoneField