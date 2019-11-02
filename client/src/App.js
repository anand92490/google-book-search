import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
        </div>

      </Router>
    );
  }
}

export default App;
