import React from 'react'
import  "./home.css"
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Chart from "../Chart/Chart"
import Grapic from "../Profit/Grapic"
function Home() {
  return (
    <div className="home">
        <Sidebar/>
        <div className="container">
          <Navbar/>
         <div className='widges'>
           <Chart/>
          <Grapic/>
         </div>
        </div>
    
    </div>
  )
}

export default Home