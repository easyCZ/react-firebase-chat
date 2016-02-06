import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {username: ''};
  }

  onFormSubmit(event) {
    event.preventDefault();
    let username = this.state.username;
    this.props.onLogin(username);
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)} >
        <TextField
          onChange={(e) => this.onUsernameChange(e)}
          hintText="Username"
          floatingLabelText="Username" />


      </form>

    )
  }

}