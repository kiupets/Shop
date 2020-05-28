import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAPP8fRUYcK1bRGrk1kLAdkRT6gXqvpUHQ",
    authDomain: "myreactproyect.firebaseapp.com",
    databaseURL: "https://myreactproyect.firebaseio.com",
    projectId: "myreactproyect",
    storageBucket: "myreactproyect.appspot.com",
    messagingSenderId: "382498112465",
    appId: "1:382498112465:web:871c3878b411d4eaab16f0"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = () =>  auth.signInWithPopup(provider)

  export default firebase