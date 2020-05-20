import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <NavLink className='name' to='/'><h1>JANE COGGER</h1></NavLink>
        </header>
    )
}

export default Header