import { useEffect, useState } from "react";

const useFet = (url) => {
    const[data,setData]=useState(null)
    useEffect (() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
              throw Error('Could not fetch the data from that resource');
            }
            return res.json();
        })
        .then(data => {
            console.log("the data" + data);
            setData(data)
            
        })
        .catch(err=>{
            console.log(err.message);
        })
        return()=> console.log('cleaned..')
     }, [url] )
     return {data}
    }   
  
    
 
        
    
export default useFet;