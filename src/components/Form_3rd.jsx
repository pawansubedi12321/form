import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Form_3rd = ({array,setarray,userdata}) => {
  const[username,setusername]=useState('');
  const[password,setpassword]=useState(''); 
  
  const click=(e)=>{
    e.preventDefault();
    userdata={
      username:username,
      
    }
    setarray({...array,userdata});
    
  }
  console.log(array);
  return (
    <div>
      <form onSubmit={click}>
        <label>
        username:
      </label>
      <input type="text"onChange={(e)=>setusername(e.target.value)}/>
      <br></br>
      <label>
        password:
      </label>
      <input type="password"/>
      <br></br>
    
      <button>submit</button>
      </form>
      <Link to="/viewform">
        <button>next</button>
      </Link>
    </div>
  )
}

export default Form_3rd