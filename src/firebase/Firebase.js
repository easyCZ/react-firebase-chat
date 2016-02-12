import FirebaseConfig from './FirebaseConfig';
import firebase from 'firebase';


class Firebase extends firebase {

    constructor(url) {
        super(url);
    }

    login(username) {
        return this.child('users').push(username)
    }

    getUsers(fn) {
    	return this.child('users').on('value', fn)
    }

}

const firebaseInstance = new Firebase(FirebaseConfig.url);

export default firebaseInstance;