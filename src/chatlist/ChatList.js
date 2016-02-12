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
    Firebase.getUsers((snapshot) => {
      this.setState({user: snapshot.val()})
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