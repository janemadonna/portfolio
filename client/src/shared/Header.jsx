import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    const [ahovered, setaHovered] = useState(false)
    const [phovered, setpHovered] = useState(false)
    const [chovered, setcHovered] = useState(false)

    const styles = {backgroundColor: 'rgb(184, 229, 255)'}

    return (
        <div className='nav-header'>
            <header>
                <NavLink className='name' to='/'><h1>JANE COGGER</h1></NavLink>
                <NavLink className='name2' to='/'><h1>JANE COGGER</h1></NavLink>
            </header>
            <div className='nav-links'>
                <NavLink className='nav-link' onMouseEnter={() => setaHovered(true)} onMouseLeave={() => setaHovered(false)} style={ahovered ? {backgroundColor: 'white'} : props.blue ? styles : null} to='/about'>ABOUT</NavLink>
                <NavLink className='nav-link' onMouseEnter={() => setpHovered(true)} onMouseLeave={() => setpHovered(false)} style={phovered ? {backgroundColor: 'white'} : props.blue ? styles : null} to='/projects'>PROJECTS</NavLink>
                <NavLink className='nav-link' onMouseEnter={() => setcHovered(true)} onMouseLeave={() => setcHovered(false)} style={chovered ? {backgroundColor: 'white'} : props.blue ? styles : null} to='/contact'>CONTACT</NavLink>
            </div>
        
        </div>
    )
}

export default Header