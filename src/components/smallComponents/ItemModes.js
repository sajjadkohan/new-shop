'use client';
import React from 'react'

const ItemModes = ({title,value}) => {

  return (
    <div>
        <h2>{title}</h2>
        <p>{value.length&& value.map(item => (

        <>
            <span>{item.name}</span><br/>
            <span>{item.value}</span><br/>
            <h3>{item.price}</h3>
        </>

        ))}</p>
    </div>
  )
}

export default ItemModes