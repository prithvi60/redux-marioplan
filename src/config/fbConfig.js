import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBT1Rl2SKb9_hmZlvXFvIV2_GV4BneRGYg",
    authDomain: "gamex-redux.firebaseapp.com",
    projectId: "gamex-redux",
    storageBucket: "gamex-redux.appspot.com",
    messagingSenderId: "128488654856",
    appId: "1:128488654856:web:4ae1b0e2241465910f29bd",
    measurementId: "G-W6HR7Y7L6R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;