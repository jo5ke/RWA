import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from './components/books-list';
import Knjiga from './components/book-details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Books></Books>
        <Knjiga></Knjiga>
      </div>
    );
  }
}

export default App;
