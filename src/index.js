import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Welcome';
import image from './image';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
	<Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/image" component={image} />
    </div>
  </Router>,
	 document.getElementById('root'));

