'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react'
import { API_BASE } from '../../constanst';
import toast, { Toaster } from 'react-hot-toast';

export const AuthContext = createContext();

const AuthCtx = ({children}) => {

  const [userInformation,setUserInformation] = useState('');
  const [isLogin,setIsLogin] = useState(false);
  const [loading,setLoading] = useState(false);
  const [sendOtp,setSendOtp] = useState(false);
  const [errorMsg,setErrorMsg] = useState(null);
  const [error,setError] = useState(null);
  const [numberPhone,setNumberPhone] = useState();
  const [otpCode,setOtpCode] = useState(null);
  const [okLogin,setOkLogin] = useState(false);
  const [timeSecond,setTimeSecond] = useState(60);
  const [errorState,setErrorState] = useState(true);
  const [citiesL,setCitiesL] = useState([
    {
    key : NaN,
    value : ""
    }
]);

  const router = useRouter();

  useEffect(()=> {

    const checkToken = async () => {

        const token = localStorage.getItem("accessToken");
        userLoged(token);

    }
    checkToken();


  },[])

  useEffect(()=> {
    sendOtp&&repeatTimer();
  },[timeSecond]);

  // functions

  const setToken = async (token) => {
    try {
      localStorage.setItem('accessToken',token)
    } catch (e) {
      
    }
  }

  

  const getCity = async (state) => {
    var strLength = `${state}`.length;
    console.log(strLength);
    if(strLength<=2){
      setErrorState(true)
    }else{
      setErrorState(false)
    }
    if(strLength>=2){
      // setErrorState(false)
      await axios.get(`https://iran-locations-api.vercel.app/api/v1/cities?state=${state}`,{withCredentials : false})
      .then(async res => {
        // setCitiesL([
        //   {
        //     key : NaN,
        //     value : ""
        //   }
        // ]);
        // setCitiesL(await res.data.cities);

        
        if(res.data){
          setErrorState(false);
          let newCitiesL = [{ key : NaN, value : "" }];
          res.data.cities.forEach(item => {
          newCitiesL.push({
          key : item.id-1,
          value : item.name
          });
          });
          setCitiesL(newCitiesL);
         }else{
          setErrorState(true)
         }

        // res.data&&alert(JSON.stringify(citiesL));
        // console.log(res.data);
        console.log(citiesL);
      })
      .catch(err => {
        console.log(err.message);
        setErrorState(true);
      })
      // await fetch(`https://iran-locations-api.vercel.app/api/v1/cities?state=${state}`)
      //      .then(response => response.json())
      //      .then(json => {
      //          console.log(json)
      //          setCities(json)
      //      });
    }
   }


  const logOut = () => {
    localStorage.clear();
    setIsLogin(false);
    setSendOtp(false)
    toast('خروج از حساب کاربری انجام شد')
  }


  const userLoged = async (myToken) => {
      axios.get(`${API_BASE}/auth/isLogin`,{withCredentials:true})
      .then(res => {
        if(res.data.success){
          setUserInformation(res.data.user);
          // console.log("USERLOGGED",res.data);
          localStorage.setItem('userMobile',res.data.user.mobile)
          // setToken(res.data.accessToken);
          setIsLogin(true);
          toast("وارد حساب کاربری خود شده اید و نیازی به ورود مجدد نیست")
        } else {
          setUserInformation(null);
          // toast(res.data.message,{duration : 3000});
        }
      })
      .catch(err => {
        setError(err.message);
      })
  }

  const repeatTimer = () => {
    setTimeout(() => {
      timeSecond > 0 && setTimeSecond(timeSecond -1)
     }, 1000);
  }

  const getOtpCode = async(mobile) => {
    setLoading(true);
      await axios.post(`${API_BASE}/auth/getOtp`,{mobile : mobile})
      .then(res => {
        console.log("1",loading);
        console.log("2",loading);


        setNumberPhone(mobile);
        console.log(res.data);
        if(res.data.success){

          setLoading(false); 
          setSendOtp(true);
          repeatTimer();
          setErrorMsg(null);
          toast.success(res.data.message);

        } else{
          setLoading(false)
          toast.error(res.data.message);
        }
      })
      .catch(err => setError(err.message))
  }

  const reSendOtp = () => {
    // setSendOtp(false);
    setTimeSecond(60);
    getOtpCode(numberPhone);
  }

  const backToMobileField = () => {
    setSendOtp(false);
    setTimeSecond(60);

  }

  const sendOtpCode = async(mobile,otpCode) => {
    await axios.post(`${API_BASE}/auth/checkOtp`,{mobile ,code : otpCode})
    .then(res => {
      setLoading(true);
      setNumberPhone(mobile);
      setOtpCode(otpCode)
      setSendOtp(true);
      if(res.data.success){
        setTimeout(() => {
          setLoading(false);
          
        }, 3000);
        setIsLogin(true);
        setToken(res.data.accessToken);
        console.log("تووووکن",res.data.accessToken);
        toast.success("ورود")
        router.back();
      } else {
        setTimeout(() => {
          
          setLoading(false);
        }, 4000);
        toast.error(res.data.message)
      }

    })
    .catch(err => setError(err.message))
}

  // functions

  return (
    <AuthContext.Provider 
    value={{
      userInformation,
      isLogin,
      loading,
      sendOtp,
      numberPhone,
      otpCode,
      error,
      errorMsg,
      timeSecond,
      citiesL,
      errorState,
      getOtpCode,
      sendOtpCode,
      userLoged,
      reSendOtp,
      backToMobileField,
      logOut,
      getCity
      }}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthCtx;