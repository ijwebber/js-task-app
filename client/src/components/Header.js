import React, { Component } from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <div className="line"></div>
      <Date />
      <Title text={props.title} />
    </div>
  );
}

class Date extends Component {
  day() {
    var today = new Date();

    console.log("boom" + today.getDate());
  }

  getDate() {}

  render() {
    return (
      <div className="date">
        <h1 className="day">{this.day()}</h1>
        <h2 className="long">16 09 20</h2>
      </div>
    );
  }
}

function Title(props) {
  return (
    <div className="title">
      <h1 className="text">{props.text}</h1>
    </div>
  );
}
