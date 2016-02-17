import React, {Component} from 'react';
import Firebase from '../firebase/Firebase'

class ChatList extends Component {

  constructor(props) {
    super(props);

    this.state = {
        users: []
    }

    Firebase.child('rooms/user1/roomC').set({
        timestamp: 1,
        last_message: 'Room C Last message'
    });

    Firebase.getUsers((snapshot) => {
        let instance = snapshot.val();
        let values = Object.keys(instance).map(key => instance[key]);
      this.setState({users: values })
    })
  }

  render() {
    let users = this.state.users.map((arg, i) => <div key={i}>{arg}</div>)
    return (
      <div> {users} </div>
      );
  }

}

export default ChatList;