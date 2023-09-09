import React from 'react'

const View_form = ({array,setarray}) => {
  
    
    //console.log("ee");

    // console.log(array[3].age);
  return (
    <div>
        <ol>
      
        {array.map((item, index) => (
        <li key={index}>
            <p>Name:{item.name}</p>
            <p>Email:{item.email}</p>
            <p>Phone:{item.phoneno}</p>
            <p>education:{item.education}</p>
            <p>age:{item.age}</p>
            <p>username:{item.username}</p>
        </li>    
      ))}
      </ol>
      
      {/* {array.map((data)=>{
        return(
            <li>{data.name}</li>
            <p>{data.age}</p>
        )
      })} */}
    </div>

  )
}

export default View_form