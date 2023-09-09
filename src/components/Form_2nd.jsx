import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
const Form_2nd = ({array,setarray,userdata}) => {
  const[education,seteducation]=useState('');
  const[age,setage]=useState('');
  
  const click=(e)=>{
    e.preventDefault();
    userdata={
      
      education:education,
      age:age,
      
    }
    
    setarray({...array,userdata});
    
    
  }
  console.log(array);
  
  
  
  
  
  
  //setarray(array);
 // console.log(email);
 
  return (
    <div>
       {/* <p>props:{email}</p> */}
       <form onSubmit={click}>
       <label>
        Education:
      </label>
      <input type="text"onChange={(e)=>seteducation(e.target.value)}/>
      <br></br>
      <label>
        Age:
      </label>
      <input type="text"onChange={(e)=>setage(e.target.value)}/>
      <br></br>
      {/* <label>upload your cv:</label>
      <input type="file"></input>
      <br></br> */}
      
  
      <button>submit</button>
      </form>
      <Link to="/Form_3rd">
        <button>Next</button>
      </Link>
      </div>
     
  )
}

export default Form_2nd