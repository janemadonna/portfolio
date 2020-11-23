import React from 'react'

const Button = (props) => {
    const styles = {
        backgroundColor: 'rgb(255, 217, 217)'
    }
    return (
                <button onClick={props.toggle} style={props.blue ? styles : null} >
                    {props.blue ? 'make it pink!' : 'make it blue!'}
                </button>
    )
}

export default Button