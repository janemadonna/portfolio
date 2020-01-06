import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-bar'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/about'>About</NavLink>
            <NavLink className='nav-link' to='/projects'>Projects</NavLink>
            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
        </div>
    )
}

export default Nav