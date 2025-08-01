import React,{useState,useEffect} from 'react'
import {Link, Outlet} from 'react-router-dom'
import ProductService from '../service/ProductService';

export default function ProductList() {
    const [prodarr,setprodarr]=useState([]);
    const [searchprodarr,setsearchprodarr]=useState([]);
    const [searchtxt,setsearchtxt]=useState("");
    useEffect(()=>{
        console.log("in initialize useeffect")
        fetchdata();
    },[])
    useEffect(()=>{
        setsearchprodarr([...prodarr])
    },[prodarr])

    useEffect(()=>{
       if(searchtxt===""){
          setsearchprodarr([...prodarr])
       }else{
          let newarr=prodarr.filter(prod=>prod.pname.includes(searchtxt))
          setsearchprodarr([...newarr])
       }

    },[searchtxt])
    const fetchdata=async ()=>{
        let response=await ProductService.getAllProducts();
        console.log(response);
        setprodarr(response.data)
    }

    const deleteproduct=async (pid)=>{
        let response=await ProductService.deleteProduct(pid);
        fetchdata();
    }
        
return (
    <div>
        <Link to="/form">
        <button type="button" name="add" id="add" className="btn btn-success">Add new Product</button>
        </Link>
        <br></br>
        Search : <input type="text" name="search" id="search"
        value={searchtxt}
        onChange={(event)=>{setsearchtxt(event.target.value)}}></input>
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Product id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">price</th>
      <th scope="col">Mfg Date</th>
      <th>action</th>
    </tr>
  </thead>
  <tbody>
    {searchprodarr.map(prod=><tr key={prod.pid}>
      <th scope="row">{prod.pid}</th>
      <td>{prod.pname}</td>
      <td>{prod.qty}</td>
      <td>{prod.price}</td>
      <td>{prod.mfgdate}</td>
      <td>
        <Link to={`/edit/{prod.pid}`} state={{prodob:prod}}>
        <button type="button" name="edit" id="edit" className="btn btn-primary">Edit</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" name="delete" id="delete" className="btn btn-danger" onClick={()=>{deleteproduct(prod.pid)}}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={`/list/details/${prod.pid}`}>
        <button type="button" name="view" id="view" className="btn btn-info">View</button>
        </Link>
      </td>
    </tr>)}
  </tbody>
</table> 
<hr></hr> 
<Outlet></Outlet>
    </div>
  )
}
