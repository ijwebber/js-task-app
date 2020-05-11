import React, { Component } from 'react';
import './Day.css';

export default class Day extends Component {

    state = {
        day: this.getDayString(),
        longDate: this.getDateString(),
    }

    getDayString() {
        var dayIndex = (new Date()).getUTCDay();
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex];
    }

    getDateString() {
        var date = new Date();

        var day = date.getDate();
        if (date.getDate() < 10) {
            day = '0' + day.toString();
        }

        var month = date.getMonth() + 1;
        if (date.getMonth() < 10) {
            month = '0' + month.toString();
        }

        var year = date.getYear() - 100;
        return (day + " " + month + " " + year);
    }

    render() {
        return (
            <div className="Day">
                <h1 id="day">{"Wednesday"}</h1>
                <h2 id="date">{this.state.longDate}</h2>
            </div>
        );
    }

}