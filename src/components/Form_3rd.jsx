import React, { useState , } from 'react'
import { Link ,useLocation} from 'react-router-dom'
const Form_3rd = () => {
  const[username,setusername]=useState('');
  const[password,setpassword]=useState(''); 
  const[userdata,setuserdata]=useState(''); 

  const location = useLocation()
  let { data } = location.state
  
  const click=(e)=>{
    e.preventDefault();
    const userdata={
      username:username,
      password: password,
    }
    setuserdata(userdata);
    // data = {...data, ...userdata};
    console.log(data);
    
  }
  // console.log(array);
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
      <Link to="/viewform" state={{ data: {...data,...userdata} }}>
        <button>next</button>
      </Link>
    </div>
  )
}

export default Form_3rd