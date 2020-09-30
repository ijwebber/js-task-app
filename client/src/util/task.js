const axios = require("axios");

export function getTasks() {
  return axios
    .get("http://localhost:8000/todo")
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function addTask(task) {
  return axios
    .post("http://localhost:8000/todo", { todo: task })
    .then(function (res) {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export function deleteTask(id) {
  return axios
    .delete("http://localhost:8000/todo/" + id)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}
