import React from "react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    //onSubmit prop which is a function will be called here, passed down from App.js
    if (this.state.username && this.state.password) {
      // we passed down the state object as an argument to onSubmit => login = ({ username, password }) assign to this.state
      this.props.onSubmit(this.state);
    }
  };

  handleChange = event => {
    console.log("Input => Changing state");
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username :
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password :
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
