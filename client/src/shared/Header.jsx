import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <NavLink className='nav-link' to='/about'>ABOUT</NavLink>
            <NavLink className='nav-link' to='/projects'>PROJECTS</NavLink>
            <header>
                <NavLink className='name' to='/'><h1>JANE COGGER</h1></NavLink>
            </header>
            <NavLink className='nav-link' to='/contact'>CONTACT</NavLink>
        
        </div>
    )
}

export default Header