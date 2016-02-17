import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Login from './Login.js';
import Users from './Users.js';
import Header from './Header.js';
import Chat from './Chat.js';
import ChatList from './chatlist/ChatList';

import * as LoginActions from './actions/LoginActions'
import Contacts from './contacts/Contacts';

class App extends Component {

  render() {

    return (
      <div id="Messenger" className="row top-xs" style={styles}>

        <div id="MessengerContacts" className="col-xs-4" style={styles}>
          <Contacts />
        </div>

        <div id="MessengerChat" className="col-xs-8" style={styles}>
          <div className="box">
            chat
          </div>
        </div>


      </div>
    )



    console.log(this.props);

    let content = this.props.login.authenticated
      ? <Chat />
      : <Login />;

    return (

      <div>
        <Header />
        <ChatList />
        {content}
        <Users />
      </div>
    );
  }
}

const styles = {
  width: '100vw',
  height: '100vh',
  margin: 0,
  boxShadow: '0 0 0 0.5px rgba(0, 0, 0, 0.2)'
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

