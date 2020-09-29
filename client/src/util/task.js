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
