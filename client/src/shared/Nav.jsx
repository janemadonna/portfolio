import React from 'react'
import { NavLink } from 'react-router-dom'
import burger from '../images/hamburg.svg'

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            display: false
        }
    }

    handleClick = () => {
        this.setState({display: !this.state.display})
    }

    render() {
        return (
            <div>
                <div className='nav-bar'>
                    <div onClick={this.handleClick} className={this.state.display == true? 'rotate' : 'norotate'}>
                        <img className='burger' alt='burger menu' src={burger}/>
                    </div>
                </div>
                <div className={this.state.display == true? 'active' : 'inactive'}>
                    <NavLink className='nav-link' to='/about'>ABOUT</NavLink>
                    <NavLink className='nav-link' to='/projects'>PROJECTS</NavLink>
                    <NavLink className='nav-link' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        )
    }
}

export default Nav