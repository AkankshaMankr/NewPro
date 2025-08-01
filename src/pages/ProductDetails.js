import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ProductService from '../service/ProductService';

//"/list/details/123"
export default function ProductDetails() {
     const params=useParams();
     const [proddetails,setProddetails]=useState({})
     useEffect(()=>{
        getdetails();
     },[params.pid])

     const getdetails=async ()=>{
        const response=await ProductService.getById(params.pid);
        setProddetails({...response.data})
     }

  return (
    <div>
        <h4>Product Pid : {proddetails.pid}</h4>
        <h4>Product Name : {proddetails.pname}</h4>
        <h3>Product qty : {proddetails.qty}</h3>
        <h3>Product price : {proddetails.price}</h3>
        <h4>Product mfgdate : {proddetails.mfgdate}</h4>
    </div>
  )
}
