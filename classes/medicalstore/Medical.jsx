import React,{useState,useEffect} from 'react'
import './Medical.css'

const Medical = () => {
       useEffect(() => {
               fetch("")
                   .then(response => response.json())
                   .then(data => {
                       setData(data); // Assuming `products` is the key in `db.json`
                       setProducts(data);
                   })           
           }, []);
  return (
    <>
    <div id='store'>
        <h1>Medical Store</h1>

        <form action="">
            <label htmlFor=""></label>
            <input type="text" placeholder='search box'/>
            <br />
            <label htmlFor=""></label>
            <input type="text" placeholder='Enter product'/>
            <br />
            <label htmlFor=""></label>
            <input type="text" placeholder='enter Quantity'/>
            <br />
            <label htmlFor=""></label>
            <input type="text" placeholder='enter customer name'/>

        </form>
        <div id='btn'>
            <button >Add to Cart</button>
            <button>Remove from Cart</button>
            <button >submit</button>
        </div>
    </div>
      
      <div id='details'>
        <h1>product list</h1>
        <table>
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
            </tr>
            </thead>
            <tbody>

            </tbody>

        </table>
      </div>
    </>
  )
}

export default Medical
