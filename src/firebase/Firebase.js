import FirebaseConfig from './FirebaseConfig';
import firebase from 'firebase';


class Firebase extends firebase {

    constructor(url) {
        super(url);
    }

    login(username) {
        return this.child('users').push(username)
    }

}

const firebaseInstance = new Firebase(FirebaseConfig.url);

export default firebaseInstance;