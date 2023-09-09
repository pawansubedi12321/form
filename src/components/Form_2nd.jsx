import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
const Form_2nd = () => {
  const location = useLocation()
  let { data } = location.state
  const[userdata,setuserdata]=useState({});
  const[education,seteducation]=useState('');
  const[age,setage]=useState('');
  
  const click=(e)=>{
    e.preventDefault();
    setuserdata({
      education:education,
      age:age,
    });

    // console.log(education);
    
    // data = {...data, ...userdata};
    console.log(data);
    
    
  }
  // console.log(array);
  
  
  
  
  
  
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
      <Link to="/Form_3rd" state={{ data: {...data,...userdata} }}>
        <button>Next</button>
      </Link>
      </div>
     
  )
}

export default Form_2nd