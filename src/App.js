import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBF1Cw9Hr3f_U0_YKLO09GqA2QCd8t-36A",
  authDomain: "chat-app-2020.firebaseapp.com",
  databaseURL: "https://chat-app-2020.firebaseio.com",
  projectId: "chat-app-2020",
  storageBucket: "chat-app-2020.appspot.com",
  messagingSenderId: "379822062942",
  appId: "1:379822062942:web:94d9856bbdc0cd3d3fa3cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
