import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';
<script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>

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
        <h1>Bloc Chat React</h1>
        <div className="room-list">
          <RoomList firebase={firebase} />
        </div>
      </div>
    );
  }
}

export default App;
