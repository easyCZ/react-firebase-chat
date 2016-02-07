import Firebase from './firebase/Firebase';
import React, { Component } from 'react';


export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    usersToUsernames(users) {
        return Object.keys(users)
            .map((key) => users[key]);
    }

    componentDidMount() {
        Firebase.child('users').on('value', (snapshot) => {
            let usernames = this.usersToUsernames(snapshot.val());
            this.setState({ users: usernames });
        });
    }

    render() {
        console.log('users', this.state.users);
        let usernames = this.state.users.map((user) => {
            return (<span>{user}, </span>);
        });

        return (
            <div>
                Connected users:
                {usernames}
            </div>
        )

    }

}


