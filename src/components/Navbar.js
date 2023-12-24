import React from 'react'
import './NavStyle.css'

export  default function Navbar ()  {
  return (
    <div className='nav'>
        <div className='nav--logo'> 
            <img src="../images/logo2.png" alt='logoimg' className='nav-logo-img'/>
            <h1 className='mainTitle'>ICONOGRAPHY</h1>
        </div>
        
         <div className='nav--list'>
            <ul>
                <li><img src="../images/LOGO.png"  className='nav-logo-img'  alt='img'></img></li>
            </ul>
        </div> 
    </div>
  )
}
