import React, {Component} from 'react';
import Firebase from '../firebase/Firebase'

class ChatList extends Component {

  constructor(props) {
    super(props);

    this.state = {
        users: []
    }


  }

  componentWillMount() {
    Firebase.getUsers(function(snapshot) {
      console.log(snapshot.val())
    })
  }

  render() {
    return (
      <div>test</div>
      );
  }

}

export default ChatList;