// I put a bunch of wrong code here. See below. Look at why this doesn't go here.
// I need to enter my firebase credentials here.

let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyDnxW-I9bCdZXM8MpKQO1mJeG952D8ZNfk",
    authDomain: "whatevermag-9968f.firebaseapp.com",
    projectId: "whatevermag-9968f",
    storageBucket: "whatevermag-9968f.appspot.com",
    messagingSenderId: "727367003947",
    appId: "1:727367003947:web:094c8cf3c9ccd23a8fdf6e"

};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();



