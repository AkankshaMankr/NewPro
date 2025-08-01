import React,{useState} from 'react'
import ProductService from '../service/ProductService';
import { useNavigate } from 'react-router-dom';

export default function ProductForm() {
    const navigate=useNavigate();
    const [formdetails,setformdetails]=useState({pid:"",pname:"",qty:"",price:"",mfgdate:""})
    const addproduct=async ()=>{
        if(formdetails.pid==="" || formdetails.pname==="" || formdetails.qty==="" || formdetails.price==="" || formdetails.mfgdate===""){
            alert("pls fill data");
            return;
        }
        let response=await ProductService.addProduct(formdetails);
        console.log(response);
        navigate("/list")
    }
  return (
    <div>
        <form>
            <div className="form-group">
                <label htmlFor="pid">Product id</label>
                <input type="text" className="form-control" name="pid" id="pid"
                value={formdetails.pid}
                onChange={(event)=>{setformdetails({...formdetails,pid:event.target.value})}}/>
            </div>

            <div className="form-group">
                <label htmlFor="pname">Product name</label>
                <input type="text" className="form-control" name="pname" id="pname"
                value={formdetails.pname}
                onChange={(event)=>{setformdetails({...formdetails,pname:event.target.value})}}/>
            </div>

            <div className="form-group">
                <label htmlFor="qty">Quantity</label>
                <input type="text" className="form-control" name="qty" id="qty"
                value={formdetails.qty}
                onChange={(event)=>{setformdetails({...formdetails,qty:event.target.value})}}/>
            </div>

            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="text" className="form-control" name="price" id="price"
                value={formdetails.price}
                onChange={(event)=>{setformdetails({...formdetails,price:event.target.value})}}/>
            </div>

            <div className="form-group">
                <label htmlFor="mfgdate">MfgDate</label>
                <input type="date" className="form-control" name="mfgdate" id="mfgdate"
                value={formdetails.mfgdate}
                onChange={(event)=>{setformdetails({...formdetails,mfgdate:event.target.value})}}/>
            </div>
  
            <button type="button" className="btn btn-primary" onClick={addproduct}>Add new product</button>
</form>
    </div>
  )
}
