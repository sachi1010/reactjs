import React from 'react'
import Skill from './Skill';


const Box = (props) => {
    const {data}=props
    console.log(data);
  return (
    < >
     <div className="box">
          <img src={data.image} alt="" />
          <h2>{data.name}</h2>
          <h3>Age:{data.age}</h3>
          <h3>{data. occupation}</h3>
          <h3 id='skil'>Skils:</h3>
          <ul>
            {
            data.skils.map((item, index) => (<Skill item={item}/>))
            }
          </ul>
      </div> 
    </>
  )
}

export default Box
