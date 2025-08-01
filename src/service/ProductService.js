import axios from 'axios'

const baseUrl="http://localhost:8181/product/";

 class ProductService{
    getAllProducts(){
       return axios.get(baseUrl+"products")
    }
    getById(pid){
       return axios.get(baseUrl+"products/"+pid)
    }
    addProduct(product){
      //const myheader={"content-type":"application/json","Autherization ":"bearer <token>"}
      const myheader={"content-type":"application/json"}  
      return axios.post(baseUrl+"products/"+product.pid,product,{header:myheader})
    }

    updateProduct(product){
      //const myheader={"content-type":"application/json","Autherization ":"bearer <token>"}
      const myheader={"content-type":"application/json"}  
      return axios.put(baseUrl+"products/"+product.pid,product,{header:myheader})
    }

    deleteProduct(pid){
            return axios.delete(baseUrl+"products/"+pid)
    }
}

export default new ProductService();