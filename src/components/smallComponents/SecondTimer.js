import React, { useEffect, useState } from 'react'

const SecondTimer = () => {

  const [time,setTime] = useState(10);

    useEffect(()=> {

        setTimeout(() => {
            time > 0 && setTime(time -1)
        }, 1000);

    },[time])
  return (
    <>{time}</>
  )
}

export default SecondTimer