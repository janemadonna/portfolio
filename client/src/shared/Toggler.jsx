import React from 'react'

class Toggler extends React.Component {
    state = {
        blue: false
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                blue: !prevState.blue
            }
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.blue, this.toggle)}
            </div>
        )
    }

}

export default Toggler