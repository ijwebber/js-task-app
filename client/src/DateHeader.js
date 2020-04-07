import React, { Component } from 'react';
import './DateHeader.css';
import arrowR from './arrow-r.svg';
import arrowL from './arrow-l.svg';
import Date from './Date';

export default class DateHeader extends Component {
    render() {
        return (
            <div class="DateHeader">
                <img src={arrowL} className="arrow" />
                <Date />
                <img src={arrowR} className="arrow" />
            </div>
        );
    }
}