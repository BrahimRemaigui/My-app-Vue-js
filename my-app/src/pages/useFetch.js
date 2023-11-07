import { useState,useEffect } from "react";
const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true)
    const [error, setError]=useState(null)

    useEffect(() => {
        setTimeout(() => {

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
                    setPending(false)
                })
                .catch(err=>{
                    setError(err.message)
                    console.log(err.message);
                    setPending(false)
                })
        }, 1000)
        return()=> console.log('cleaned..')
        }, [url]);
return {data,isPending,error}
}

export default useFetch;