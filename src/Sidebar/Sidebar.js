import React from 'react'
import "./sidebar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LoginIcon from '@mui/icons-material/Login';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {Link} from "react-router-dom"
 export default function Sidebar() {
  return (
    <div className="sidebar">
        
        <div className="top">
        <Link to="/" style={{textDecoration:'none'}}><span className="logo">Webdesi</span>
      </Link>
        </div>
        <hr/>
            <div className="center">
                <p className="title">Main</p>
<ul className="ul">
    <li className='li'>
    <Link to="/" style={{textDecoration:'none'}}><AccountCircleIcon className="icon"/> <span className='span'>Home</span> </Link></li>
    <li className='li'>
    <Link to="/analytic" style={{textDecoration:'none'}}><AnalyticsIcon className="icon"/> <span className='span'>Analytic</span>
    </Link>
    </li></ul>
    <p className="title">Other</p>
    <ul className="ul">
    <li  className='li'>
        <Link to ="/sales" style={{textDecoration:'none'}}>
        <BusinessCenterIcon  className="icon"/><span className='span'>Sales</span>
        </Link>
        </li>
    <li className='li'> <Link to="/profit" style={{textDecoration:'none'}}><AttachMoneyIcon  className="icon"/><span className='span'>profit</span> </Link></li>
    <li className='li'>
    <Link to ="/login" style={{textDecoration:'none'}}><LoginIcon  className="icon"/><span className='span'>Login</span> </Link></li>
</ul>
            </div>
            
        </div>
  )
}