import React from 'react';
import Nav from './shared/Nav'
import Footer from './shared/Footer'
import './App.css';
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
