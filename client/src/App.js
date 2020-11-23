import React from 'react';
import './App.css';
import Routes from './routes'
import Header from './shared/Header'
import Button from './shared/Button'

class App extends React.Component {
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
    const styles = {
      backgroundColor: 'rgb(125, 179, 248)'
    }
    return (
          <div className="App" style={this.state.blue ? styles : null}>
            <Button toggle={this.toggle} blue={this.state.blue} />
            <Header blue={this.state.blue} />
            <Routes blue={this.state.blue} />
          </div>
    );
  }
}

export default App;
