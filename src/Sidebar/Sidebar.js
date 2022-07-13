import React from 'react'
import "./sidebar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LoginIcon from '@mui/icons-material/Login';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
export default function Sidebar(){
  return(
    <div className="dropdown">
<button><a  href='/' className='home'>WebDesi</a></button>
<div className='project'>
<button ><p className='icon'><AccountCircleIcon/>DASHBOARD</p></button>
<ul>
   <li><a href='/home'><p className='icon'><AnalyticsIcon/>HOME</p></a></li>
  <li><a href='/analytic'><p className='icon'><LeaderboardIcon/>ANALYTIC</p></a></li>
  <li><a href='/sales'><p className='icon'><BusinessCenterIcon/>SALES</p></a></li>
  <li><a href='/profit'><p className='icon'><AttachMoneyIcon/>PROFIT</p></a></li>
  <li><a href='/login'><p className='icon'><LoginIcon/>LOGOUT</p></a></li>
  
</ul>

    </div>
    </div>
    
  )
}