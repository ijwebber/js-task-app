import React, { Component } from "react";
import "./AddBar.css";

export default class AddBar extends Component {
  // TODO try adding a function that calls the api seperately
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }

  render() {
    return (
      <div id="addBar">
        <form onSubmit={this.props.addItem}>
          <input
            type="text"
            id="newTodo"
            placeholder="New Task"
            ref={this.props.inputElement}
            value={this.props.currentItem}
            onChange={this.props.handleInput}
          />
          <button id="addButton" type="submit">
            <span>Add</span>
          </button>
        </form>
      </div>
    );
  }
}
