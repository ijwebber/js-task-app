import React, { Component, useState } from "react";
import { addTask, deleteTask, getTasks, updateStatus, deleteCompleted } from "../util/task";
import trashIcon from "../assets/trash.svg";
import pencilIcon from "../assets/pencil.svg";
import arrowIcon from "../assets/tri-arrow.svg";
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
    this.onDeleteCompletedClick = this.onDeleteCompletedClick.bind(this);
    this.updateTasks = this.updateTasks.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  updateTasks() {
    getTasks().then((tasks) => this.setState({ tasks: tasks }));
  }

  onAddTextChange(e) {
    const value = e.target.value;
    this.setState({ add_text: value });
  }

  onAddSubmit(event) {
    event.preventDefault();
    if (this.state.add_text !== "") {
      addTask(this.state.add_text).then((res) =>
        this.setState((state) => ({
          tasks: [...state.tasks, res],
          add_text: "",
        }))
      );
    }
  }

  onDeleteClick(id) {
    deleteTask(id).then((res) => {
      if (res.status === 200) {
        this.updateTasks();
      }
    });
  }

  onDeleteCompletedClick() {
    deleteCompleted().then((res) => {
      if (res.status === 200) {
        this.updateTasks();
      }
    })
  }

  onStatusChange(id, status) {
    updateStatus(id, status).then((res) => {
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
        <TaskList
          tasks={this.state.tasks}
          onDeleteClick={this.onDeleteClick}
          onDeleteCompletedClick={this.onDeleteCompletedClick}
          onStatusChange={this.onStatusChange}
        />
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

class CompletedTasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }

    this.onArrowClick = this.onArrowClick.bind(this);
  }

  onArrowClick() {
    console.log()
    this.setState((state) => ({ active: !state.active }));
  }

  render() {

    const arrowStyle = this.state.active ? { transform: "rotate(90deg)" } : { transform: "rotate(0deg)" };

    return (<div className="CompletedTasks">
      <img src={arrowIcon} alt="arrow" className="arrow" style={arrowStyle} onClick={this.onArrowClick} />
      <span className="text">Completed Tasks</span>
      <span className="text-delete" onClick={this.props.onDeleteCompletedClick}>Delete All</span>

      { this.state.active ? this.props.children : null}
    </div>);
  }
}

function TaskList(props) {
  const completedTasks = props.tasks.filter((task) => task.status).map((task) => (
    <Task
      key={task._id}
      task={task}
      onDeleteClick={props.onDeleteClick}
      onStatusChange={props.onStatusChange}
    />
  ));

  const incompletedTasks = props.tasks.filter((task) => !task.status).map((task) => (
    <Task
      key={task._id}
      task={task}
      onDeleteClick={props.onDeleteClick}
      onStatusChange={props.onStatusChange}
    />
  ));

  return <div className="task-list">
    {incompletedTasks.length > 0 ? incompletedTasks : <div className="done-text">You have completed all your tasks!<br /></div>}
    <CompletedTasks onDeleteCompletedClick={props.onDeleteCompletedClick}>{completedTasks}</CompletedTasks>

  </div>;
}

function Task(props) {
  const [edit, setEdit] = useState(false);

  function deleteClicked() {
    return props.onDeleteClick(props.task._id);
  }

  function statusChanged() {
    return props.onStatusChange(props.task._id, !props.task.status);
  }

  const taskEditStyle = edit ? { borderBottom: "1px solid" } : null;

  return (
    <div className="task">
      <Checkmark
        checked={props.task.status}
        onChecked={statusChanged}
        id={props.task._id}
      />
      <div className="task-text" style={taskEditStyle} contentEditable={edit}>{props.task.todo}</div>
      <div className="task-btns">
        <div className="task-icon-ctn mr02">
          <img className="task-icon" alt="edit" src={pencilIcon} onClick={() => setEdit(!edit)} />
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

function Checkmark(props) {
  return (
    <div className="round">
      <input
        className="check-input"
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={props.onChecked}
      />
      <label className="check-label" htmlFor={props.id}></label>
    </div>
  );
}
