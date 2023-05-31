'use client';
import axios from 'axios';
import React, { useState , createContext, useEffect } from 'react';

export const UserContext = createContext();

const UserCtx = ({children}) => {

    const [fullAddress,setFullAddress] = useState(
        {
        cityName :	"",
        ostanName :	"",
        description :	"",
        lang :	"",             
        lat :	"",             
        mobile :	"",
        name :	"",
        postalCode :	""
        }
        );
    const [errorState,setErrorState] = useState(true);
    const [citiesL,setCitiesL] = useState([
        {
        key : NaN,
        value : ""
        }
    ]);

    useEffect(() => {
        console.log(fullAddress);
    }, [fullAddress]);


    const changeValue = (e) => {
        if(e.target) {
        setFullAddress({...fullAddress,[e.target.name] : e.target.value});
        } else {
        // setFullAddress({...fullAddress,[e.target.name] : e.target.value});
            console.log(e);
            if(e.ostanName){
                setFullAddress({...fullAddress,ostanName : e.ostanName})
            }
            if(e.cityName){
                setFullAddress({...fullAddress,cityName : e.cityName})
            }

        }
        // console.log(fullAddress);
    }

    
  

    const setLatLeng = (lat,lng,descAddress) => {
        setFullAddress({...fullAddress,lat : lat.toString(),lang : lng.toString(),description:descAddress});
    }

    const getCity = async (state) => {
        var strLength = `${state}`.length;
        // console.log(strLength);
        if(strLength<=1){
          setErrorState(true)
        }else{
          setErrorState(false)
        }
        if(strLength>=2){
    
          await axios.get(`https://iran-locations-api.vercel.app/api/v1/cities?state=${state}`,{withCredentials : false})
          .then(async res => {
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
    
            // console.log(citiesL);
          })
          .catch(err => {
            console.log(err.message);
            setErrorState(true);
          })
        }
       }

  return (
    <UserContext.Provider value={{
        setLatLeng,
        changeValue,
        getCity,
        fullAddress,
        errorState,
        citiesL
        }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserCtx