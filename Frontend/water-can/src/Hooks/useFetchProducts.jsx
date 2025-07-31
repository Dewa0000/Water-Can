import React from "react";
import { useState,useEffect } from "react";

const FetchProducts = () => {

    const [products,setProducts] = useState([])
    useEffect(() => {
        async function fetchpro(){
                const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://water-can-backend.onrender.com/";

               try{
            const res = await fetch(`${backendUrl}/products`)
            const data = await res.json();
            const spliced = data.splice(2,1)
            setProducts(spliced); 
        }catch(err){
            console.log(err.message)
        }
        }
       fetchpro();
    }, [])
    return {products}
}

export default FetchProducts;