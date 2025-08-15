// import React from 'react'

const Productcategory = ({categoryGet,setcatGot}) => {
 return (
    <>
     {categoryGet.map((currEle,index)=>{
      return(
      <div key={index}  className="listitems" onClick={()=>setcatGot(currEle.slug)}>{currEle.slug}</div>
      )
             })} 
     </>
    
    
      
     
       
    
    
  )
}

export default Productcategory;
