import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoBoard from './components/Todo/TodoBoard';


export default class App extends Component {

  render() {
    return (
      <div className="App" >
        <Header name="todo" />
      </div>
    );
  }
}