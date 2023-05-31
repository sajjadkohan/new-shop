'use client';
import React, { useState , createContext, useEffect } from 'react';

export const UserContext = createContext();

const UserCtx = ({children}) => {

    const [fullAddress,setFullAddress] = useState(
        {
        cityName :	"",
        description :	"",
        lang :	"",             
        lat :	"",             
        mobile :	"",
        name :	"",
        ostanName :	"",
        postalCode :	""
        }
        );
        

    useEffect(() => {
        console.log(fullAddress);
    }, [fullAddress]);


    const changeValue = (e) => {
        setFullAddress({...fullAddress,[e.target.name] : e.target.value});
        console.log(fullAddress);
    }

    
  

    const setLatLeng = (lat,lng,descAddress) => {
        setFullAddress({...fullAddress,lat : lat.toString(),lang : lng.toString(),description:descAddress});
    }

  return (
    <UserContext.Provider value={{
        setLatLeng,
        changeValue,
        }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserCtx