import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Roll from './components/Roll'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Roll/>
        <Footer/>
      </div>
    );
  }
}

export default App;
