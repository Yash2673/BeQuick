import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBSTiMByR3G2CZ8G9V0uMu7txB5n5nOik0",
    authDomain: "yash-bequick.firebaseapp.com",
    databaseURL: "https://yash-bequick.firebaseio.com",
    projectId: "yash-bequick",
    storageBucket: "yash-bequick.appspot.com",
    messagingSenderId: "246684405617",
    appId: "1:246684405617:web:8353d668b8c0bddc0d70d0",
    measurementId: "G-W9WB8EZ96E"
  };
  
  firebase.initializeApp(config);
  //firebase.firestore().settings({timestampsInSnapShots:true});

  export default firebase;