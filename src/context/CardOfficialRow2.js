'use client';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { API_BASE2 } from '../constanst';

export const CardRow2Ctx = createContext();

const CardOfficialRow2 = ({children}) => {

    const [data , setData] = useState([]);

    const fetchData = async() => {
        const res = await axios.get(`${API_BASE2}/row2HomePage`);
        return res.data;
    }
    useEffect(()=> {

        const fetchdataa = async () => {
            setData(await fetchData())
        }

        fetchdataa();

        console.log("??????????",data);
    },[]);

  return (
    <CardRow2Ctx.Provider value={data}>
        {children}
    </CardRow2Ctx.Provider>
  )
}

export default CardOfficialRow2