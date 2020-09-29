import React, { Component } from "react";
import { getTasks } from "../util/task";
import "./Content.css";

export default function Content() {
  return (
    <div className="content">
      <Board />
      <div className="back"></div>
    </div>
  );
}

class Board extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
    getTasks().then((tasks) => this.setState({ tasks: tasks }));
  }

  render() {
    return (
      <div className="board">
        <Add />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

function Add() {
  return (
    <form className="add">
      <button type="submit" className="btn">
        ADD
      </button>
      <input className="input"></input>
    </form>
  );
}

function TaskList(props) {
  console.log(props.tasks);
  const mappedTasks = props.tasks.map((task) => <Task task={task} />);

  return <div className="task-list">{mappedTasks}</div>;
}

function Task(props) {
  return (
    <div className="task">
      <input type="checkbox" className="task-check" />
      {props.task.todo}
    </div>
  );
}
