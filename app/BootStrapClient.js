"use client"

import { useEffect } from "react"

export default function BootStrapClient(){
    useEffect(()=>{
        import('bootstrap/dist/js/bootstrap.min.js')
    },[])
    return<></>
}