import React from 'react';
import './App.css';
import Routes from './routes'
import Header from './shared/Header'
import Button from './shared/Button'
import Toggler from './shared/Toggler'

function App() {
  const styles = {
    backgroundColor: 'blue'
  }
  return (
    <Toggler render={(blue) => {
      return (
        <div className="App" style={blue ? styles : null}>
          <Button />
          <Header />
          <Routes />
        </div>
      )
    }} />
  );
}

export default App;
