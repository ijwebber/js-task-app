import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="todo" />
        <Content />
      </div>
    );
  }
}
