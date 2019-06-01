import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

// if(localStorage.getItem("id_token")) {
//     // then we will attach it to the headers of each request from react application via axios
//     //axios.defaults.headers.common['Authorization'] = `Bearer ${"id_"}`;
//     axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
//     console.log("index.js    " + localStorage.getItem("id_token"));
//   }
  
ReactDOM.render(<App />, document.getElementById("root"));
