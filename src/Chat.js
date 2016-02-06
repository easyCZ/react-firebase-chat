import React, { Component } from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';

import RaisedButton from 'material-ui/lib/raised-button';

import Login from './Login';


export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }

  onLogin(event) {
    this.setState({ loggedIn: true });
    console.log(event);
  }

  render() {

    if (this.state.loggedIn)
      return (
        <Card>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis
          </CardText>
          <CardActions className="row">
            <TextField className="col-xs-8" hintText="Message..." />
            <RaisedButton label="Send" secondary={true} />
          </CardActions>
        </Card>
      );

    return (
      <Card>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText>
            <Login onLogin={this.onLogin.bind(this)} />
          </CardText>
          <CardActions>
            <RaisedButton label="Login" secondary={true} />
          </CardActions>
        </Card>
      )
  }

}