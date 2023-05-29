'use client';
import React from 'react'
import spinnerGif from '../../../images/Rolling.gif'
import Image from 'next/image'

const Spinner = () => {
  return (
    <img style={{height: '22px'}} src={spinnerGif.src}/>
  )
}

export default Spinner