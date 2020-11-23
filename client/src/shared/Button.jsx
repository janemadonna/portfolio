import React from 'react'
import Toggler from './Toggler'

const Button = () => {
    return (
        <Toggler render={(blue, toggle) => {
            return (
                <button onClick={toggle}>
                    {blue ? 'make it pink!' : 'make it blue!'}
                </button>
            )
        }}
         />
    )
}

export default Button