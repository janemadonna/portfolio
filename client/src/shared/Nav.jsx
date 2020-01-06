import React from 'react'
import { NavLink } from 'react-router-dom'
import burger from '../images/menu-24px.svg'

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            display: 'active'
        }
    }

    handleclick = () => {
        this.setState({display: 'inactive'})
    }

    render() {
        return (
            <div>
                <div className='nav-bar'>
                    <NavLink className='nav-link home-link' to='/'>HOME</NavLink>
                    <div className='drop-down'>
                        <div>
                            <img className='burger' onClick={this.handleClick} alt='burger menu' src={burger}/>
                        </div>
                    </div>
                </div>
                <div className={this.state.display}>
                    <NavLink className='nav-link' to='/about'>ABOUT</NavLink>
                    <NavLink className='nav-link' to='/projects'>PROJECTS</NavLink>
                    <NavLink className='nav-link' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        )
    }
}

export default Nav