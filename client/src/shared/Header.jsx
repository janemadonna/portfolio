import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    const styles = {
        backgroundColor: 'rgb(184, 229, 255)',
        '&:hover': {
            backgroundColor: 'white'
        }
    }
    return (
        <div className='nav-header'>
            <header>
                <NavLink className='name' to='/'><h1>JANE COGGER</h1></NavLink>
                <NavLink className='name2' to='/'><h1>JANE COGGER</h1></NavLink>
            </header>
            <div className='nav-links'>
                <NavLink className='nav-link' style={props.blue ? styles : null} to='/about'>ABOUT</NavLink>
                <NavLink className='nav-link' style={props.blue ? styles : null} to='/projects'>PROJECTS</NavLink>
                <NavLink className='nav-link' style={props.blue ? styles : null} to='/contact'>CONTACT</NavLink>
            </div>
        
        </div>
    )
}

export default Header