import React from 'react';
import { Component } from 'react';
import './Day.css';

export default class Date extends Component {

    render() {
        return (
            <div className="Day">
                <h1 id="day">{this.props.day}</h1>
                <h2 id="date">{this.props.longDate}</h2>
            </div>
        );
    }

}