import React from 'react'
import resume from '../images/Resume.jpg'

const About = () => {
    return (
        <div className='about'>
            <p><span style={{fontFamily: 'Rouge Script, cursive', fontSize: 30}}>I</span> am a driven and passionate software engineer with a background in set design and venue management. As a full-stack developer, I have designed and created web applications using JavaScript, React, Ruby, and Sequelize.  Through decorating sets for brands like Calvin Klein and H&M, I developed a meticulous eye and a flexible ability to work with teams in high-pressure environments, directing and taking direction in turn as the situation demanded. This sensitivity to detail comes across in my code. As a studio manager booking venues, I worked closely with clients to provide them with the best possible experience for their events. In my undergraduate education at Tufts University, I gained proficiency in Spanish and French, and my persistent studying of programming languages is a continuation of that care for syntax and grammar. I am confident and focused in my pursuit of a creative and fulfilling career in software development.</p>
            <img src={resume} alt='resume' />
        </div>
    )
}

export default About