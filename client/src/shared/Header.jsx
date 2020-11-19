import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='nav-header'>
            <header>
                <NavLink className='name' to='/'><h1>JANE COGGER</h1></NavLink>
                <NavLink className='name2' to='/'><h1>JANE COGGER</h1></NavLink>
            </header>
            <div className='nav-links'>
                <NavLink className='nav-link' to='/about'>ABOUT</NavLink>
                <NavLink className='nav-link' to='/projects'>PROJECTS</NavLink>
                <NavLink className='nav-link' to='/contact'>CONTACT</NavLink>
            </div>
        
        </div>
    )
}

export default Header