import React, { Component } from 'react';
import './DateHeader.css';
import arrowR from '../../images/arrow-r.svg';
import arrowL from '../../images/arrow-l.svg';
import arrowHovR from '../../images/hov-arrow-r.svg';
import arrowHovL from '../../images/hov-arrow-l.svg';
import Day from './Day';

export default class DateHeader extends Component {

    state = {
        date: new Date(),
        arrowImgR: arrowR,
        arrowImgL: arrowL
    }

    getNextDay() {
        var date = this.state.date;
        date.setDate(date.getDate() + 1);
        return date;
    }

    getPrevDay() {
        var date = this.state.date;
        date.setDate(date.getDate() - 1);
        return date;
    }

    getDayString() {
        console.log(this.state.date);
        console.log(this.state.date.getDay());
        console.log(this.state.date);

        var dayIndex = (this.state.date).getUTCDay();
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex].toUpperCase();
    }

    getOrdinal(date) {
        if (date % 10 === 1 && date !== 11) return "ST";
        else if (date % 10 === 2 && date !== 12) return "ND";
        else if (date % 10 === 3 && date !== 13) return "RD";
        else return "TH";
    }

    getMonthString(monthIndex) {
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][monthIndex].toUpperCase();
    }

    getDateString() {
        var dayDate = this.state.date.getDate();
        var day = dayDate + this.getOrdinal(dayDate);
        var month = this.getMonthString(this.state.date.getMonth());
        var year = this.state.date.getFullYear();
        return (day + " " + month + " " + year);
    }

    render() {
        return (
            <div className="DateHeader">
                <img src={this.state.arrowImgL}
                    className="arrow" alt="left-arrow"
                    onMouseEnter={() => this.setState({ arrowImgL: arrowHovL })}
                    onMouseOut={() => this.setState({ arrowImgL: arrowL })}
                    onClick={() => this.setState({ date: this.getPrevDay() })}
                />
                <Day day={this.getDayString()} longDate={this.getDateString()} />
                <img src={this.state.arrowImgR}
                    className="arrow" alt="right-arrow"
                    onMouseEnter={() => this.setState({ arrowImgR: arrowHovR })}
                    onMouseOut={() => this.setState({ arrowImgR: arrowR })}
                    onClick={() => this.setState({ date: this.getNextDay() })}
                />
            </div>
        );
    }
}