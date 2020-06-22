import React, { Component } from "react";
import "./TodoBoard.css";
import AddBar from "./AddBar";

export default class TodoBoard extends Component {
  render() {
    return (
      <div className="TodoBoard">
        <div className="boardBack" />
        <div className="board">
          <AddBar />
          <div id="content"></div>
        </div>
      </div>
    );
  }
}
