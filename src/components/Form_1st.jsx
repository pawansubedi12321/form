import React, { useEffect, useState } from 'react'
//import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

const Form_1st= ()=> {
  const[array,setarray]=useState({});
  const[name,setname]=useState('');
  const[email,setemail]=useState('');
  const[phoneno,setphoneno]=useState('');

 
  const submit=(e)=>{
   // e.preventDefault();
    e.preventDefault();
    const userdata={
      name:name,
      email:email,
      phoneno:phoneno,  
    }
    
    setarray({...userdata});
    console.log("Submitting");    
  }
 
  // console.log(name);
   return (
  
    <div>

      <form onSubmit={submit}>
        
      <label>
        Name:
      </label>
      <input type="text"onChange={(e)=>setname(e.target.value)}/>
      <br></br>
      <label>
        Email:
      </label>
      <input type="email"onChange={(e)=>setemail(e.target.value)}/>
      <br></br>
      <label className="phone">
        Phone no:
      </label>
      <input type="text"className='phonetext'onChange={(e)=>setphoneno(e.target.value)}/>
      <br></br>

    {/* <Link to="/Form_2nd"> */}
      <button>Submit</button>
      {/* </Link> */}
      </form>
      <Link to="/Form_2nd" state={{ data: {...array} }}>
        <button>Next</button>
      </Link>
      <Link to="/viewform" state={{ data: {...array} }}>
        <button>view form</button>
      </Link>
      </div>
  
    )
    
  
}

export default Form_1st;