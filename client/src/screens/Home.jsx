import React from 'react'
import avatar from '../images/Avatar.png'

const Home = () => {
    return (
        <div className='home'>
            <p>DESIGNER</p>
            <img src={avatar} />
            <p>DEVELOPER</p>
        </div>
    )
}

export default Home