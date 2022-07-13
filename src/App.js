import React from 'react'
import Home from './page/Home'
import Analytic from './component/Analytic'
import Sales from './page2/Sales'
import Profit from './page3/Profit'
import Login from './page1/Login'
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div>
  
   <Routes>
  
   <Route path="/" element={<Login/>}/>
    
    <Route path="/home" element={<Home/>} />
   
    <Route path="/analytic" element={<Analytic/>}/>
    <Route path="/sales" element={<Sales/>}/>
    <Route path="/profit" element={<Profit/>}/>
    <Route path="/login" element={<Login/>}/>
   
   </Routes>
  
    

    </div>
 
  )
}

export default App