import { api_url } from "./api";

const axios = require("axios");

const address = api_url();

export function getTasks() {
  return axios
    .get(address)
    .then(function (res) {
      return res.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function addTask(task) {
  return axios
    .post(address, { todo: task })
    .then(function (res) {
      return res.data;
    })
    .catch((err) => console.log(err));
}

export function deleteTask(id) {
  return axios
    .delete(address + "/" + id)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

export function deleteCompleted() {
  return axios
    .delete(address + "/")
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

export function updateStatus(id, status) {
  return axios
    .patch(address + "/" + id, { status: status })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

export function updateText(id, text) {
  return axios
    .patch(address + "/" + id, { todo: text })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}