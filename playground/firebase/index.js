import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAMw5Z8zeFioA7G0XE3fUQqozV0Kl4gZf8",
  authDomain: "bird-todo-app.firebaseapp.com",
  databaseURL: "https://bird-todo-app.firebaseio.com",
  storageBucket: "bird-todo-app.appspot.com",
  messagingSenderId: "257354093884"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.1.0'
  },
  isRunning: 'true',
  user: {
    name: 'Andrew',
    age: '23'
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New Todo added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('Todo Changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Walk the dog!'
});

todosRef.push({
  text: 'Eat the foods'
});
