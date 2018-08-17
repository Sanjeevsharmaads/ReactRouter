import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./Welcome.js";
import image from "./image.js";
import {Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is app Component</h1>
        <ul>
        <li>
          <Link to="/welcome">Welcome</Link>
        </li>
        <li>
          <Link to="/image">Click to see image</Link>
        </li>
      </ul>
      </div>
    );
  }
}

export default App;
