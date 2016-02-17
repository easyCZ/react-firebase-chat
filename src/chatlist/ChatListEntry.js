import React, {Component} from 'react';

class ChatListEntry extends Component {

  constructor(props) {
    super('props', props);
  }

  render() {
    return(
      <div>{this.props.lastMessage}</div>
      )
  }

}

export default ChatListEntry;