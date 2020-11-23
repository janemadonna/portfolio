import React from 'react'
import coinfox from '../images/coinfox.gif'
import astralPlan from '../images/astral-plan.gif'
import worder from '../images/wOrder.gif'

const Projects = (props) => {
    const styles = {
        backgroundColor: 'rgb(184, 229, 255)'
    }
    return (
        <div className='projects'>
            <div className='worder' style={props.blue ? styles : null}>
                <h4 className='project-title'>WORDER</h4>
                <p>A dictionary and poetry anthology, compiled from words and poems created by users.  Back-end made with Ruby on Rails, front-end made with React.</p>
                <img className='coinfox-gif' src={worder} alt='worder gif' />
                <a href='https://worder.surge.sh'><p className='project-link'>Visit wOrder</p></a>
            </div>
            <div className='coinfox' style={props.blue ? styles : null}>
                <h4 className='project-title'>COINFOX</h4>
                <p>A fantasy cryptocurrency portfolio database made with CRUD in React, using a third-party API and a mock API.</p>
                <img className='coinfox-gif' src={coinfox} alt='coinfox gif' />
                <a href='https://coinfox.surge.sh'><p className='project-link'>Visit Coinfox</p></a>
            </div>
            <div className='astral-plan' style={props.blue ? styles : null}>
                <h4 className='project-title'>ASTRAL PLAN</h4>
                <p>A fantasy solar system database made with user authentication so that a user can create, update, and delete a solar system, with dynamic stars, planets and moons. Back-end created with Express and Sequelize and deployed on Heroku. Front-end created with React and deployed on Surge.</p>
                <img className='coinfox-gif' src={astralPlan} alt='Astral Plan gif' />
                <a href='https://astral-plan.surge.sh'><p className='project-link'>Visit Astral Plan</p></a>
            </div>
        </div>
    )
}

export default Projects