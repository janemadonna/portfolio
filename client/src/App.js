import React from 'react';
import Nav from './shared/Nav'
import Footer from './shared/Footer'
import './App.css';
import Routes from './routes'
import Header from './shared/Header'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
