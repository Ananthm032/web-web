import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import "./profit.css"
import Image3 from '../image3/Image3'
function Profit() {
  return (
    <div className='pro'>
      <Sidebar/>
      <div className='procontainer'>
<Navbar/>
  <div className='style'>
<h1 className='h1'>

Rainbow</h1>
<p><h3>What does a rainbow represent?</h3>
A rainbow is often a sign of hope, the beauty after the storm, a pot of gold and good fortune at the rainbow's end. For many, a rainbow carries a personal symbolic meaning–representing inclusivity and diversity, an all-embracing image of love and friendship.
</p>
  </div>
  <Image3/>
  </div>
      </div>
   
  )
}

export default Profit