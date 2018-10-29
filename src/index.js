import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import BattleProvider from "./battle_context/BattleProvider";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";

import "firebase/database";
const config = {
  apiKey: "AIzaSyDUKl_fbvJlUqy-RYySiP03jDhKC89QKOo",
  authDomain: "wildbattle-1e46c.firebaseapp.com",
  databaseURL: "https://wildbattle-1e46c.firebaseio.com",
  projectId: "wildbattle-1e46c",
  storageBucket: "wildbattle-1e46c.appspot.com",
  messagingSenderId: "340803107917"
};
firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
    <BattleProvider>
      <App />
    </BattleProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
