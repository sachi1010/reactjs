import React from 'react'

import Home from './Home'
const CardFile = () => {
    const info=[
{
    name:"Ramkumar",
    age:25,
    occupation:"Software Engineer",
    image:"./images/img1.jpeg",
    skils:["java","python","react"]
},
{
    name:"Rajkumar",
    age:30,
    occupation:"Data Scientist",
    image:"./images/img1.jpeg",
    skils:["python","js","react"]
},
{
    name:"Rahulkumar",
    age:35,
    occupation:"Product Manager",
    image:"./images/img1.jpeg",
    skils:["java","python","react"]
},
{
    name:"Rajesh",
    age:40,
    occupation:"Data Engineer",
    image:"./images/img1.jpeg",
    skils:["python","js","react"]
},
{
    name:"Alice",
    age:45,
    occupation:"Data Analyst",
    image:"./images/img1.jpeg",
    skils:["java","python","react"]
}
    ]

    
  return (
    <>
     <Home info={info}/> 
    </>
  )
}

export default CardFile
