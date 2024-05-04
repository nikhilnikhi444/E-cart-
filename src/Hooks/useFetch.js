// custom hooks - use to fetch data
import { useState,useEffect } from "react"

const useFetch =(url)=>{
    const [data,setData]=useState(null)

    useEffect(()=>{
        // api call
      fetch(url).then((result)=>{
        result.json().then((response)=>{
           setData(response);
        })
      })
    },[])
   return data
}

export default useFetch