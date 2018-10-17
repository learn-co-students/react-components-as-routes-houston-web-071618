import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './home'
import Login from './login'
import Navbar from './navbar'



const About = () => {
  return (
    <div>
      <h1>This is the about component!</h1>
    </div>
  )
}


ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path='/about' render={About} />
      <Route path='/login' component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);




