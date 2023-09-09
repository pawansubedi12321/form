import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Form_1st from './components/Form_1st.jsx';
import Form_2nd from './components/Form_2nd.jsx';
import Form_3rd from './components/Form_3rd.jsx';
import NoPage from './components/NoPage';
import View_form from './components/view_form';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  //const [count, setCount] = useState(0)
  
  const[array,setarray]=useState({});
  const userdata={

  };
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Form_1st />}/>
     <Route path="Form_2nd" element={<Form_2nd/>} />
     <Route path="Form_3rd"element={<Form_3rd/>}/>
     <Route path="viewform"element={<View_form/>}/>
     <Route path="*" element={<NoPage/>} />
    
     </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App
