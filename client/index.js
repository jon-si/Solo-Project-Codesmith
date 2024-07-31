import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./App.scss";
import { Provider } from 'react-redux';

const el = document.getElementById("app");

ReactDOM.render(<App />, el);