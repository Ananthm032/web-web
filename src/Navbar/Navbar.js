import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DarkModeIcon from '@mui/icons-material/DarkMode';

 function Navbar(){
  return (
    <div className="Navbar">
     <div className='wrap'>
<div className='search'>
<input type="text" placeholder="Search..." className="input"></input><SearchIcon/>
</div>
<div className="items">
    <div className='item'>
<LanguageIcon/>English
    </div>
  
    <div className='item'>
<SettingsIcon/>
    </div>
   
    <div className='item'>
<NotificationsNoneIcon/>
    </div>
   <div className="item">
<DarkModeIcon/>
   </div>
   
   
           </div>
        </div>
    </div>
  )
}

export default Navbar