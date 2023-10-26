import React, { useContext, useState } from 'react'
import { apiContext } from '../context/apiContext'






function Navbar({handleFilter}) {
    
    
    
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src="./assets/logov2.png" alt="" />
            <span className="logoTitle">MST NEWS</span>
        </div>
        
        <div className='navItems'>
            <input type="checkbox" name="nav" id="nav" />
            <label htmlFor="nav" className="navItemsIcons">
                <i className="fa-solid fa-x"></i>
                <i className="fa-solid fa-bars"></i>

            </label>
            <ul>
                <li>apple</li>
                <li>tesla</li>
                <li>bitcoin</li>
                <li>nasa</li>
                <li>upsc</li>
            </ul>
        </div>

        <div className='searchBar'>
            <input type="text" placeholder='search ...' onChange={handleFilter} />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Navbar
