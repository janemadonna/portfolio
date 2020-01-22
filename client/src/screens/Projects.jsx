import React from 'react'
import coinfox from '../images/coinfox.gif'

const Projects = () => {
    return (
        <div className='projects'>
            <div className='worder'>
                <a href='https://worder.surge.sh'>wOrder</a>
            </div>
            <div className='coinfox'>
                <h4>COINFOX</h4>
                <p>A fantasy cryptocurrency portfolio database made with CRUD in React, using a third-party API and a mock API.</p>
                <img className='coinfox-gif' src={coinfox} alt='coinfox gif' />
                <a href='https://coinfox.surge.sh'><p className='project-link'>Visit Coinfox</p></a>
            </div>
            <div className='astral-plan'>
                <a href='https://astral-plan.surge.sh'>Astral Plan</a>
            </div>
        </div>
    )
}

export default Projects