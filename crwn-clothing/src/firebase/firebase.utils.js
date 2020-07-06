import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBnUhJf2677krShHMd4M95VBhMGg8Jeugo",
    authDomain: "crwn-db-d20f1.firebaseapp.com",
    databaseURL: "https://crwn-db-d20f1.firebaseio.com",
    projectId: "crwn-db-d20f1",
    storageBucket: "crwn-db-d20f1.appspot.com",
    messagingSenderId: "939232259241",
    appId: "1:939232259241:web:5c3bad3bba334904988db8"
  };
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;