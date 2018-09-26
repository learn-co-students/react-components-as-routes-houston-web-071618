import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from './home.js'
import About from './about.js'
import Login from './login.js'
import NavBar from './navbar.js'
// ReactDOM.render(
// 	(
// 		<Home />, document.getElementById("root"));
ReactDOM.render(
	<Router>
		<React.Fragment>
		<NavBar />
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/login" component={Login} />
		</React.Fragment>
	</Router>,
	document.getElementById("root")
);
