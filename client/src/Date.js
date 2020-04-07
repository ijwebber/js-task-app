import React from 'react';
import { Component } from 'react';
import './Date.css';

export default class Date extends Component {
    constructor(props) {
        super(props);
        this.state = { date: "new Date()" }
        console.log(this.state.date);
    }

    render() {
        return (
            <div class="Date">
                <h1 id="day">WEDNESDAY</h1>
                <h2 id="date">7TH APRIL 2020</h2>
            </div>
        );
    }

}