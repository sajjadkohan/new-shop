'use client';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import {API_BASE} from '../constanst'

export const SliderDataContext = createContext();

const SliderProductContext = ({children}) => {

    const [dataSlider,setDataSlider] = useState([]);

    const fetchData = async() => {
        const res = await axios.get(`${API_BASE}/products`);
        return res.data;
    }
    useEffect(()=> {

        const fetchDataa = async () => {

            setDataSlider(await fetchData());
        }

        fetchDataa();

    },[])

  return (
    <SliderDataContext.Provider value={dataSlider}>
    {children}
    </SliderDataContext.Provider>
  )
}

export default SliderProductContext;