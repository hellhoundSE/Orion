import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Main from "./Main";
import Login from "./Login";
import Czesc from "./Czesc";
import Krok from "./Krok";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/main.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/czesc" element={<Czesc />} />
        <Route exact path="/krok" element={<Krok />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
