import React, { Component } from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <div className="line"></div>
      <Day />
      <Title text={props.title} />
    </div>
  );
}

class Day extends Component {
  getDayString() {
    var dayIndex = new Date().getUTCDay();
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][dayIndex];
  }

  getDateString() {
    var date = new Date();

    var day = date.getDate();
    if (date.getDate() < 10) {
      day = "0" + day.toString();
    }

    var month = date.getMonth() + 1;
    if (date.getMonth() < 10) {
      month = "0" + month.toString();
    }

    var year = date.getYear() - 100;
    return day + " " + month + " " + year;
  }

  render() {
    return (
      <div className="date">
        <h1 className="day">{this.getDayString()}</h1>
        <h2 className="long">{this.getDateString()}</h2>
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
