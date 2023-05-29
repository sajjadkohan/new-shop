'use client';
import React, { createContext } from 'react';
import { useState } from 'react';

export const StateCityCtx = createContext();

const StateAndCityContext = ({children}) => {

    const [citiesL,setCitiesL] = useState();

    const getCity = async (state) => {
       await fetch(`https://iran-locations-api.vercel.app/api/v1/cities?state=${state}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setCitiesL(json)
            });
    }

  return (
    <StateCityCtx.Provider value={{
      // citiesL,
      getCity
      }}>
      {children}
    </StateCityCtx.Provider>
  )
}

export default StateAndCityContext
