'use client';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useState ,useContext } from 'react';
import { newCartCTX } from '../../context/NewCartCtx';
import { UserContext } from '../../context/UserCtx';
import NeshanMap from 'react-neshan-map-leaflet'
// const NeshanMap = dynamic(() => import("react-neshan-map-leaflet/dist/NeshanMap"), {
//     ssr: false
//     });
// ./SimpleMap.css



function SimpleMap() {

  // let test = '2';

  const [ltLg,setLtLg] = useState({
    lat : 0,
    lng : 'test',
  });
  const [myState,setMyState] = useState();

  const {setLatLeng} = useContext(UserContext);
  const {setAddressFn} = useContext(newCartCTX);


    const getAddress = async (lat,lang) => {
        // test = toString(lat);

        // console.log(typeof latVar,typeof langVar);
        //  setLtLg({lat : latVar,lng : langVar});
        // console.log(test);
        // setLtLg({lat : latVar , lng : langVar});
        
        await axios.get(`https://api.neshan.org/v5/reverse?lat=${lat}&lng=${lang}`,{
            headers:{
                "Api-Key": "service.f3ef56b402fc4787bc18165e0ec42d0e"
            }
        })
        .then(async response => {
            const {city,state,neighbourhood,route_name,place,formatted_address} = response.data;
            let fullAddres = formatted_address || `${state}, ${formatted_address}`;
            setLatLeng(lat,lang,fullAddres);
            setAddressFn(fullAddres)
            // if(!formatted_address){
            //   setAddressFn(`${state}, ${city}, ${neighbourhood}, ${route_name}, ${place}`);
            // } else{
            //   setAddressFn(`${state}, ${formatted_address}`);
            // }
        })
    }

  return (
    <NeshanMap
    style={{width:'100%'}}

    options={{
    key: 'web.e2e1404ebbf54afda5c32826fa89156c',
    maptype: 'dreamy',
    poi: true,
    traffic: false,
    center: [35.699739, 51.338097],
    zoom: 13
    }}

    onInit={(L, myMap) => {
      let marker = L.marker([35.699739, 51.338097])
      .addTo(myMap)
      .bindPopup('I am a popup.');

    myMap.on('click', function (e) {
      // setLtLg({...ltLg,lat :e.latlng.lat,lng :e.latlng.lng });
      marker.setLatLng(e.latlng);
      getAddress(e.latlng.lat,e.latlng.lng);
      // setLatLeng(e.latlng.lat,e.latlng.lng);
      // console.log(ltLg);

    });
    

  }}
>
 
<div id="mapid">
  teeest
</div>

</NeshanMap>
  );
}

export default SimpleMap;