"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingComponent from '../smallComponents/LoadingComponent'

export function Loading () {
    const[loading,setLoading] = useState(false);
    const router = useRouter();

    // useEffect(()=> {

    //     const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    //     const handleComplete = (url) => (url === router.asPath) && setLoading(false);

    //     router.events.on('routeChangeStart',handleStart);
    //     router.events.on('routeChangeComplete',handleComplete);
    //     router.events.on('routeChangeError',handleComplete);

    //     return () => {
    //         router.events.off('routeChangeStart',handleStart);
    //         router.events.off('routeChangeComplete',handleComplete);
    //         router.events.off('routeChangeError',handleComplete);
    //     }
        
    // })

    return loading && (
    <>
    <LoadingComponent/>
    </>)

}