import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header'
import Hero from './components/Hero'
import Container from './components/Container'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
