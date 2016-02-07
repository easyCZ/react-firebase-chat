import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Login from './Login.js';
import Users from './Users.js';
import Header from './Header.js';
import Chat from './Chat.js';

import * as LoginActions from './actions/LoginActions'

class App extends Component {
  render() {

    let content = this.props.login.authenticated ?
      <Chat /> :
      <Login />;

    return (

      <div>
        <Header />
        {content}
        <Users />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { login: state.login }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(LoginActions) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

