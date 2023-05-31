'use client';
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_BASE } from "../../constanst";

export const newCartCTX = createContext();



const NewCartCtx = ({children}) => {

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [count,setCount] = useState(1);
    const [addressState,setAddressState] = useState('');


    const testF = () => {
        console.log('test');
    }

    const setAddressFn = (address) => {
        setAddressState(address);
    }
    
const getProductById = async(id) =>{

    await axios.post(`${API_BASE}/user/product/getProductById`,{
        id : id
    })
    .then(res => {
        console.log(res.data);
    })
    .catch(err => console.log(err));
}

const addToCart = async(data) =>{
    setLoading(true);
    await axios.post(`${API_BASE}/user/cart/addToCart`,data,{withCredentials:true})
    .then(res => {
        console.log(res.data);
        if(res.data.success){
            setLoading(false);
        } else {
            // setLoading(true);
            setError(res.data.message);

        }
    })
    .catch(err => console.log(err));
}

const addQuantity = async(data) => {
    setLoading(true);
    await axios.post(`${API_BASE}/user/cart/addQuantity`,{data})
    .then(res => {
        console.log(res.data);
        if(res.data.success){
            setLoading(false);
            setCount(count+1);
        } else {
            // setLoading(true);
            setError(res.data.message);

        }
    })
    .catch(err => console.log(err));
}

const deleteQuantity = async(data) => {
    setLoading(true);
    await axios.post(`${API_BASE}/user/cart/deleteQuantity`,{data})
    .then(res => {
        console.log(res.data);
        if(res.data.success){
            setLoading(false);
            setCount(count-1);
        } else {
            // setLoading(true);
            setError(res.data.message);

        }
    })
    .catch(err => console.log(err));
}

// const setLatLengFn = (lat, lng) => {
//     setLatLangState({lat: lat.toString(), lng: lng.toString()});
//     console.log('STATE',latLangState);
// }



  return (
    <newCartCTX.Provider value={{
        testF,
        getProductById,
        addToCart,
        addQuantity,
        deleteQuantity,
        setAddressFn,
        loading,error,count,addressState}}>
            
        {children}
    </newCartCTX.Provider>
  )
}

export default NewCartCtx;
