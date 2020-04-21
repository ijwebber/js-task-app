import React, { Component } from 'react';
import './App.css';
import DateHeader from './components/Header/DateHeader';
import List from './components/List/List';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <DateHeader />
        <List />
      </div>
    );
  }
}