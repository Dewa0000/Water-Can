import React from "react";
import { useState,useEffect } from "react";

const FetchProducts = () => {

    const [products,setProducts] = useState([])
    useEffect(() => {
        async function fetchpro(){
               try{
            const res = await fetch("http://localhost:5000/products")
            const data = await res.json();
            setProducts(data); 
        }catch(err){
            console.log(err.message)
        }
        }
       fetchpro();
    }, [])
    return {products}
}

export default FetchProducts;