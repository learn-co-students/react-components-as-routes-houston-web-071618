import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <input type="text" name="username" placeholder="Username"/>
            <label>Username</label>
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Password</label>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    )
  }
}

export default Login
