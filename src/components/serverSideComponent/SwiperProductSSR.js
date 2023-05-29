import React from 'react'
import SwiperProduct from '../smallComponents/SwiperProduct'
import axios from 'axios'
import { API_BASE } from '../../../constanst'



const SwiperProductSSR = async() => {

    // const newData = await axios.post(`${API_BASE}product/getAllProducts`,
    // {
    // cache: 'no-store'
    // }
    // )

    // async function getData () {
        // let response = null;
        // await axios.post(`${API_BASE}/user/product/getAllProducts`,{cache : 'no-store'})
        // .then(res => {
        //     response = res.data;
        // })
        // .catch(err => err.message)
    
        // return response

        // const res = await fetch(`${API_BASE}/user/product/getAllProducts`,{
        //     method : "POST",
        //     cache : 'no-store'
        // })

        // return res.json();

    // }

    // const res = await fetch(`${API_BASE}/user/product/getAllProducts`,{
        // credentials : true,
    //     method : "POST",
    //     cache : 'no-store'
    // })

    // const data = await res.json();

    // const data = await getData();
    // const newData = await data.data;
    // console.log(data.data);

    const res = await fetch(`${API_BASE}/user/product/getAllProducts`,{
        headers :{"Content-Type": "application/json"},
        cache:"no-store",
        method:"POST"
      })
      const data = await res.json();

  return (
    <div>
        sss
      <SwiperProduct data={data.data} titleValue='پر فروش ترین ها' titleHref='highsales'/>
    </div>
  )
}

export default SwiperProductSSR
