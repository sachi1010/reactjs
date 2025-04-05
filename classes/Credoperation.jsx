import React,{useState}from 'react'
import "./css/Credoperation.css"
export const Credoperation = () => {
    const [userdetail,setuserdetail]=useState(
        {
            name:"",
            email:"",
            phone:"",
            password:"",
        },
    )
    const [userlist,setuserlist]=useState([]);


    const handleInput = (e) => {
        const { name, value } = e.target;
        setuserdetail((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const save=(e)=>{
       
            const saved=localStorage.setItem(userdetail,JSON.stringify)
            setuserlist(saved);
            console.log(saved)
             alert("saved success")
           }    
         

  
  return (

    <>
<form action="">
    <label htmlFor="name">Enter your name:</label>
    <input type="text" placeholder='enter your name' name='name' onChange={handleInput} value={userdetail.name} />
    <br />
    <label htmlFor="email">Enter your email:</label>
    <input type="text" placeholder='enter your email' name='email' onChange={handleInput} value={userdetail.email}/>
    <br />
    <label htmlFor="password">Enter your password:</label>
    <input type="password" placeholder='enter your password' name='password' onChange={handleInput} value={userdetail.password} />
    <br />
    <label htmlFor="phone">Enter your phone number:</label>
    <input type="text" placeholder='enter your phone number' name='phone' onChange={handleInput} value={userdetail.phone} />
</form>
<div className="container">
<button onClick={save}>save</button>
<button>retrive</button>
<button>update</button>
<button>delete</button>
</div>
<div className="details">
        <h1>User Details</h1>
        <table id="employeeTable">
            <thead>
                <tr>
                    <th>user Name</th>
                    <th>user mail</th>
                    <th>user Phone Number</th>
                    <th>user password</th>
                </tr>
            </thead>
            <tbody >
                
            </tbody>
            


        </table>
    </div>

    </>
  )
}
