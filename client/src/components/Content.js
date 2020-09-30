import React, { Component } from "react";
import { addTask, deleteTask, getTasks } from "../util/task";
import trashIcon from "../assets/trash.svg";
import pencilIcon from "../assets/pencil.svg";
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
      add_text: "",
    };

    this.onAddTextChange = this.onAddTextChange.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
  }

  updateTasks() {
    console.log("test this big boy out");
    getTasks().then((tasks) => this.setState({ tasks: tasks }));
  }

  onAddTextChange(e) {
    const value = e.target.value;
    this.setState({ add_text: value });
  }

  onAddSubmit(event) {
    event.preventDefault();
    addTask(this.state.add_text).then((res) =>
      this.setState((state) => ({
        tasks: [...state.tasks, res],
        add_text: "",
      }))
    );
  }

  onDeleteClick(id) {
    deleteTask(id).then((res) => {
      if (res.status === 200) {
        this.updateTasks();
      }
    });
  }

  componentDidMount() {
    this.updateTasks();
  }

  render() {
    return (
      <div className="board">
        <Add
          onChange={this.onAddTextChange}
          text={this.state.add_text}
          onSubmit={this.onAddSubmit}
        />
        <TaskList tasks={this.state.tasks} onDeleteClick={this.onDeleteClick} />
      </div>
    );
  }
}

function Add(props) {
  return (
    <form className="add" onSubmit={props.onSubmit}>
      <button type="submit" className="btn">
        ADD
      </button>
      <input
        className="input"
        value={props.text}
        onChange={props.onChange}
      ></input>
    </form>
  );
}

function TaskList(props) {
  const mappedTasks = props.tasks.map((task) => (
    <Task key={task._id} task={task} onDeleteClick={props.onDeleteClick} />
  ));

  return <div className="task-list">{mappedTasks}</div>;
}

function Task(props) {
  function deleteClicked() {
    return props.onDeleteClick(props.task._id);
  }
  return (
    <div className="task">
      <input type="checkbox" className="task-check" />
      <p className="task-text">{props.task.todo}</p>
      <div className="task-btns">
        <div className="task-icon-ctn mr02">
          <img className="task-icon" alt="edit" src={pencilIcon} />
        </div>
        <div className="task-icon-ctn">
          <img
            className="task-icon"
            alt="delete"
            src={trashIcon}
            onClick={deleteClicked}
          />
        </div>
      </div>
    </div>
  );
}
