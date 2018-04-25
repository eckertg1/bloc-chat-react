import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyARmP2S5Jb-BF3t9gnTSZN0lKibQg8MmLA",
  authDomain: "bloc-chat-react-33fcb.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-33fcb.firebaseio.com",
  projectId: "bloc-chat-react-33fcb",
  storageBucket: "bloc-chat-react-33fcb.appspot.com",
  messagingSenderId: "488759334332"
};
firebase.initializeApp(config);

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Bloc Chat React</h1>
        </div>
        <div>
          <RoomList firebase={firebase} />
        </div>
      </div>
    );
  }
}

export default App;
