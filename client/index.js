import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import App from "./App.js";
import Events from "./Events.js";
import "./App.scss";

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,  
  document.getElementById("app"),
);

// document.getElementById("app"),