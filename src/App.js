// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Productcategory from './Category';
import Productitems from './Products';
import { useEffect,useState } from 'react';

function App() {
  let [categoryGet,setcategoryGet]=useState([]);
  let [prosGet,setprosGet]=useState([]);
  let [catGot,setcatGot]=useState("");
  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    
    .then((finalRes)=>{
      setcategoryGet(finalRes);
      
      console.log(finalRes);
    })
  }
  let getproducts=()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
      .then((finalpros)=>{
        setprosGet(finalpros.products);
        console.log(finalpros.products)

      })
  }
  useEffect(()=>{
    getCategory();
    getproducts();
  },[])
  useEffect(()=>{
    console.log(catGot);
    if(catGot!==""){
        axios.get(`https://dummyjson.com/products/category/${catGot}`)
    .then((proRes)=>proRes.data)
      .then((finalpros)=>{
        setprosGet(finalpros.products);
        console.log(finalpros.products)

      })

    }

  },[catGot])
  return (

    
   <>
   <div className='maindiv'>
    <div>
      <h2>Product Category</h2>
      <Productcategory  categoryGet={categoryGet}  setcatGot={setcatGot}/>
      
    </div>
    <div>
      <h2 className='heading2'>Our Products</h2>

         <Productitems prosGet={prosGet} />
        
    </div>
   </div>
   </>
  );
}

export default App;
