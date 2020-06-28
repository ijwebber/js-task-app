import React, { Component } from "react";
import "./TodoBoard.css";
import AddBar from "./AddBar";

export default class TodoBoard extends Component {
  inputElement = React.createRef();

  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: { text: "", key: "" },
    };
  }

  handleInput = (e) => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem,
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" },
      });
    }
  };

  render() {
    return (
      <div className="TodoBoard">
        <div className="boardBack" />
        <div className="board">
          <AddBar
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.currentItem}
          />
          <div id="content"></div>
        </div>
      </div>
    );
  }
}
