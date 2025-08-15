// import React from 'react'

const Productitems= ({prosGet}) => {
  return (
    <div className="prods">
      {prosGet.map((current,index)=>{
        return(
         <div key={index} className="productdiv">
        <img className="imgs" src={current.thumbnail} alt=""></img>
        <p className="para1">{current.title}</p>
        <p className="para2">{current.price}</p>
      
    </div>
        )

      })}
      </div>
    
   
  )
}

export default Productitems;
