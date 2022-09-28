import React from 'react'
import "./navbar.css"


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="estateName">Estatery</div>
        <ul className="sections" style={{cursor:"pointer"}}>
            <li className="category"><a href='#'>Rent</a></li>
            <li className="category"><a href='#'>Buy</a></li>
            <li className="category"><a href='#'>Sell</a></li>
            <li className="category1" style={{margin:"13px"}}>
                Property Management
                <i class="fa-solid fa-circle-chevron-down" style={{margin:"5px"}} ></i>
                </li>
            <li className="category1">
                Resources
                <i class="fa-solid fa-circle-chevron-down" style={{margin:"5px"}} ></i>
                
            </li>
        </ul>

        <div className="buttons">
            <button className='btn'>Login</button>
            <button className='btn'>SignUp</button>
        </div>
    </nav>
  )
}

export default Navbar;