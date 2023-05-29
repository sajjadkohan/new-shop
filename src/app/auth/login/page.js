'use client';
import React, { useContext, useEffect, useState } from 'react';
import {useRouter} from 'next/navigation';
import Header from '@/components/Header';
import pStyles from '../../../styles/Public.module.css';
import styles from '../../../styles/Login.module.css';
import Link from 'next/link';
import axios from 'axios';
import { validationLogin } from '../../../../functions/validation';
import toast, { Toaster } from 'react-hot-toast';
import { API_BASE } from '../../../../constanst';
// toaster

// context
import { AuthContext } from '@/context/AuthCtx';
import PhoneField from '@/components/login/PhoneField';
import CodeField from '@/components/login/CodeField';
import LoadingComponent from '@/components/smallComponents/LoadingComponent';

const login = () => {

    // context
    const {getOtpCode,sendOtpCode,sendOtp,reSendOtp,isLogin,loading} = useContext(AuthContext)
    // 09925647155
    const router = useRouter();
    
    const [data , setData] = useState({
        mobile : '09925647155',
        code : undefined
    });
    
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});
    
    
    useEffect(()=> {
        setErrors(validationLogin(data))
        console.log(!!errors.mobile);
        isLogin&&router.replace('/',{shallow:true});
        
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
    <div className={styles.loginPage}>
        <Header/>
        <Toaster/>
        <div className={pStyles.container}>
        {
            sendOtp?
            <CodeField/>
            :    
            <>
            <PhoneField/>
            </> 

        }
        </div>
    </div>
  )
}

export default login