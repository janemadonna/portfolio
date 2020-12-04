import React from 'react';
import {Helmet} from 'react-helmet'
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
    return (
          <div className="App">
            <Helmet>
              <style>{this.state.blue ? 
              'body { background-color: rgb(155, 209, 278); }' : 
              null}</style>
            </Helmet>
            <Button toggle={this.toggle} blue={this.state.blue} />
            <Header blue={this.state.blue} />
            <Routes blue={this.state.blue} />
          </div>
    );
  }
}

export default App;
