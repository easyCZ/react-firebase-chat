import FirebaseConfig from './FirebaseConfig';
import Firebase from 'firebase';


const firebase = new Firebase(FirebaseConfig.url);

export default firebase;