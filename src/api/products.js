import axios from "./axios" 
import { useEffect, useState } from "react" 
 
export const useProducts = (params) => { 
const category = params.category; 
const page = params.page;
 
    const [data, setData] = useState() 
    const [loading, setLoading] = useState(false) 
 
    useEffect(() => { 
        setLoading(true) 
        axios.get("/products?category=" + category + '&page=' + page) 
            .then(res => res.data) 
            .then(data => { 
                setData(data) 
            }).finally(() => { 
                setLoading(false) 
            }) ;
    }, [category, page]) 
     
    return { 
        data: data, 
        loading: loading 
    } 
}