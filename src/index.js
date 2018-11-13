import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var Firebaseconfig = {
    apiKey: "AIzaSyCGZ1F7ECeL2D9M0RyqjwqigoCjqo0vu0o",
    authDomain: "prueba-b81ec.firebaseapp.com",
    databaseURL: "https://prueba-b81ec.firebaseio.com",
    projectId: "prueba-b81ec",
    storageBucket: "prueba-b81ec.appspot.com",
    messagingSenderId: "65863511032"
  };

firebase.initializeApp( Firebaseconfig  );

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
