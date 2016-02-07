import React, { Component } from 'react';

import Login from './Login.js';
import Users from './Users.js';
import Header from './Header.js';


export class App extends Component {
  render() {
    return (

      <div>
        <Header />
        <Login />


      </div>
    );
  }
}