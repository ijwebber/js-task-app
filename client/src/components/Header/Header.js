import React, { Component } from 'react';
import './Header.css';
import Day from './Day';
import Title from './Title';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="headerBackground"></div>

                <Day />
                <Title />

            </div>
        );
    }
}