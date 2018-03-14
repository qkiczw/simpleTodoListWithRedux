import React, { Component } from 'react';
import './App.css';
import ListView from './components/ListView'
import AddTodo from './components/AddTodo'



class App extends Component {
  render() {
    return (
      <div className="App">
          <h1> Moja lista TODO:</h1>
          <hr />
          <AddTodo/>
          <ListView/>
      </div>
    );
  }
}

export default App;
