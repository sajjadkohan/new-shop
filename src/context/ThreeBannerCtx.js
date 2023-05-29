'use client';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { MY_API } from '../constanst';

export const threeBannerContext = createContext();

const ThreeBannerCtx = ({children}) => {

    const [dataState , setDataState] = useState([]);

    const fetchData = async() => {
        axios.get(`${MY_API}/3bannerImage`)
        .then(res => setDataState(res.data))
        .catch(err => setDataState(err))
    }

    useEffect(()=> {

        fetchData();
    },[]);

  return (
    <threeBannerContext.Provider value={dataState}>
        {children}
    </threeBannerContext.Provider>
  )
}

export default ThreeBannerCtx;