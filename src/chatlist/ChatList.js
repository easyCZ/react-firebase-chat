import React, {Component} from 'react';
import Firebase from '../firebase/Firebase'
import ChatListEntry from './ChatListEntry'

class ChatList extends Component {

  constructor(props) {
    super(props);

    this.state = {
        rooms: []
    }

    Firebase.getRooms((snapshot) => {
        let instance = snapshot.val();
        let values = Object.keys(instance).map(key => instance[key]);
      this.setState({rooms: values })
    })
  }

  render() {
    let rooms = this.state.rooms.map(
      arg => <ChatListEntry lastMessage={arg.last_message}/>)
    return (
      <div> {rooms} </div>
      );
  }

}

export default ChatList;