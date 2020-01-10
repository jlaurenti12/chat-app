import React, { Component }  from 'react';
import RoomList from './components/RoomList.js';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBF1Cw9Hr3f_U0_YKLO09GqA2QCd8t-36A",
  authDomain: "chat-app-2020.firebaseapp.com",
  databaseURL: "https://chat-app-2020.firebaseio.com",
  projectId: "chat-app-2020",
  storageBucket: "chat-app-2020.appspot.com",
  messagingSenderId: "379822062942",
  appId: "1:379822062942:web:94d9856bbdc0cd3d3fa3cf"
};
firebase.initializeApp(firebaseConfig);


class App extends Component {
   constructor(props) {
     super(props);
  }


  render() {
   return (
     <div className="App">
      <RoomList firebase={firebase}/> 
     </div>
    );
  }

}


export default App;
