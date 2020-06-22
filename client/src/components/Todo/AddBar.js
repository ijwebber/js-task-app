import React, { Component } from "react";
import "./AddBar.css";

export default class AddBar extends Component {
  // TODO try adding a function that calls the api seperately
  render() {
    return (
      <div id="addBar">
        <form action="localhost:8000/todo" method="post">
          <input type="text" id="newTodo" />
          <button id="addButton" type="submit">
            <span>Add</span>
          </button>
        </form>
      </div>
    );
  }
}
