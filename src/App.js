import React, { Component } from 'react';
import './App.css';
import User from './User';

const petInfo = {
  name: "Mimi",
  avatar: "https://i.imgur.com/AMP0su6.jpg",
  isDog: true
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <User {...petInfo} />  
      </div>
    );
  }
}

export default App;
