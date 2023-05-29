'use client';
import React, { useState , createContext } from 'react';

export const UserContext = createContext();

const UserCtx = ({children}) => {

    const[test,sTest] = useState('1234567890');
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
    const [latState,setLatState] = useState(0);


    const changeValue = (e) => {
        setFullAddress({...fullAddress,[e.target.name] : e.target.value});
        console.log(fullAddress);
    }

    
    const changeState = (latt,lang) => {
        // setFullAddress({...fullAddress,[e.target.name] : e.target.value});
        // setFullAddress({...fullAddress,lat : latt,lang : lang});
        console.log('lattt',latt);
        console.log('LANG',lang);
        console.log(fullAddress);
    }




    const setLatLeng = (lat,lng) => {
        let newLat = lat.toString();
        let newLang = lng.toString();
        setLatState(lat);
        setFullAddress({...fullAddress,lat : newLat,lang : newLang});
        console.log(newLat,newLang);
        console.log(fullAddress);
        console.log(latState);
    }

  return (
    <UserContext.Provider value={{
        test,
        setLatLeng,
        changeValue,
        changeState,
        }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserCtx