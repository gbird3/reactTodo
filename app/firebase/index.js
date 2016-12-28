import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAMw5Z8zeFioA7G0XE3fUQqozV0Kl4gZf8",
    authDomain: "bird-todo-app.firebaseapp.com",
    databaseURL: "https://bird-todo-app.firebaseio.com",
    storageBucket: "bird-todo-app.appspot.com",
    messagingSenderId: "257354093884"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
