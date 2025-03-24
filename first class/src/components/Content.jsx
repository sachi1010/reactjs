import React from 'react'
import "./Content.css"
export const Content = () => {
  return (
    <>
        <div id='global'> 
            <h1>Global Mobility Ecosystem Driving <br />Communities Forward</h1>
         </div>
            <div id='drive' class="row">
                <div class="sm-12 col-lg-3">
                    <img src="cts-covered.svg" alt="" />
                    <h1>100+</h1>
                    <h2>Cities Coverd</h2>
                    <p>All Over TamilNadu</p>
                </div>
                <div class="sm-12 col-lg-3">
                    <img src="year.svg" alt="" />
                    <h1>50000</h1>
                    <h2>Yearly Rides</h2>
                    <p>Booked by Our Customers</p>
                </div>
                <div class="sm-12 col-lg-3">
                    <img src="kms.svg" alt="" />
                    <h1>50000</h1>
                    <h2>Kilometers</h2>
                    <p>Traveled by Our Cabs</p>
                </div>

            </div>   

           
    </>
  )
}
