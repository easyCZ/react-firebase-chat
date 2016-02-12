import React, {Component} from 'react';
import Firebase from '../firebase/Firebase'

class ChatList extends Component {

  constructor(props) {
    super(props);

    this.state = {
        users: []
    }

    Firebase.getUsers((snapshot) => {
        let instance = snapshot.val();
        let values = Object.keys(instance).map(key => instance[key]);
      this.setState({users: values })
    })
  }

  render() {
    let users = this.state.users.map(arg => <div>{arg}</div>)
    return (
      <div> {users} </div>
      );
  }

}

export default ChatList;