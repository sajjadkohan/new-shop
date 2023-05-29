import React, { useContext, useEffect, useState } from 'react'
import pStyles from '../../styles/Public.module.css';
import styles from '../../styles/Login.module.css';
import Link from 'next/link';
import { ArrowLeftOutlined } from '@ant-design/icons';

// context
import { AuthContext } from '../../context/AuthCtx';
import { validationLogin } from '../../../functions/validation';
import LoadingComponent from '../smallComponents/LoadingComponent';
import SecondTimer from '../smallComponents/SecondTimer';



const CodeField = () => {

    // context
    const {getOtpCode,sendOtpCode,sendOtp,reSendOtp,isLogin,loading,timeSecond,backToMobileField} = useContext(AuthContext)
    
    const [data , setData] = useState({
        mobile : '09925647155',
        code : undefined
    });
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});
    const [time,setTime] = useState({
        min : 1,
        sec : 10
    });
    
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
        <div className={styles.loginBox + " " + styles.codeBox}>
            <button className={styles.back} onClick={() => {backToMobileField()}}><ArrowLeftOutlined /></button>
                <h1 className={styles.headTitle}>کد به شماره 0939***9093 ارسال شد</h1>
                <p className={styles.desc}>لطفا کد دریافت شده را وارد کنید</p>
                <form>
                <input name="code" type='number' className={errors.code?  touched.code? styles.numberInput + " " + styles.errorStyle  : styles.numberInput : styles.numberInput} onChange={changeHandler} placeholder='1234' onFocus={touchHandler} />
                {errors.code&& touched.code && <span className={styles.errorStyle}>{errors.code}</span>}
               {
                errors.code?
                <button disabled={true} onClick={getOtpCode} className={styles.enterBtn + " " + styles.disabledBtn}>ارسال</button>
                :
                <button onClick={(e)=> {
                    e.preventDefault();
                    sendOtpCode(data.mobile,data.code);
                }} className={styles.enterBtn}>ارسال</button>

               }
                </form>
                <div className={styles.parentTimer}>
                <p>ثانیه مانده تا <span>{timeSecond}</span></p>

                <p>
                {
                    timeSecond?
                    <span> دریافت کد جدید</span>
                    :
                    <button className={styles.resendBtn} onClick={() => {reSendOtp()}}> دریافت کد جدید</button>
                } 
                </p>

                </div>
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

export default CodeField;