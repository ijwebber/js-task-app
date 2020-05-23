import React, { Component } from 'react';
import './TodoBoard.css';

export default class TodoBoard extends Component {
    render() {
        return (
            <div className="TodoBoard">
                <div className="boardBack" />
                <div className="board">
                    <div id="addBar">
                        <svg id="addButton" data-name="Component 4 – 1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                            <line id="Line_4" data-name="Line 4" y2="25" transform="translate(12.5)" fill="none" stroke="#171717" stroke-width="3" />
                            <line id="Line_5" data-name="Line 5" y2="25" transform="translate(25 12.5) rotate(90)" fill="none" stroke="#171717" stroke-width="3" />
                        </svg>
                    </div>
                    <div id="content"></div>
                </div>
            </div >
        );

    }
}