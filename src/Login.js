import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import CardText from 'material-ui/lib/card/card-text';

import store from './store';
import { login } from './actions/LoginActions';
import Firebase from './firebase/Firebase';

const LoginStyle = {
  marginTop: '2em'
};


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {username: ''};
  }

  onSubmit(event) {
    event.preventDefault();
    let username = this.state.username;

    Firebase.login(username).then((node) => {
      // console.log(node);
      store.dispatch(login(this.state.username));
    });

  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div style={LoginStyle} className="row center-xs">
        <div className="col-xs-6">
          <form onSubmit={(e) => this.onSubmit(e)} >
            <Card>
              <CardHeader
                title="Please login to access the chat"
              />
              <CardText >
                <TextField
                  onChange={(e) => this.onUsernameChange(e)}
                  hintText="Username"
                  floatingLabelText="Username" />
              </CardText>
              <CardActions>
                <FlatButton
                  label="Reset"
                />
                <RaisedButton
                  label="Login"
                  onClick={(e) => this.onSubmit(e)}
                  primary={true}>

                </RaisedButton>
              </CardActions>
            </Card>

          </form>

        </div>


      </div>


    )
  }

}