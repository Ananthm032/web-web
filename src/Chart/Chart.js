import React from 'react'
import "./chart.css"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function first() {
  return (
    <div className='year'>
    <div className='sales'>
 <div className='salesperson'>
  <span className='box1'>Sales</span>
  <div className='arrow'>
    <span className='money'>$2341.08</span>
    <span className='rate'>+2.04<ArrowUpwardIcon className='img'/>
    </span>
 </div>
 <div>
<span className='compare'>This year</span>
 </div>
   </div>
    </div>
    <div className='sales'>
 <div className='salesperson'>
  <span className='box1'>Revenue</span>
  <div className='arrow'>
    <span className='money'>$3141.08</span>
    <span className='rate1'>-1.10<ArrowDownwardIcon className='img'/>
    </span>
 </div>
 <div>
<span className='compare'>This year</span>
 </div>
   </div>
    </div>
    <div className='sales'>
 <div className='salesperson'>
  <span className='box1'>Profit</span>
  <div className='arrow'>
    <span className='money'>$341.08</span>
    <span className='rate'>+2.04<ArrowUpwardIcon className='img'/>
    </span>
 </div>
 <div>
<span className='compare'>Compare to lastyear</span>
 </div>
   </div>
    </div>

    </div>
     
  )
}

export default first