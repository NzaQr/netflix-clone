import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyB_m4rteqKkdMfB4L-B_bl0HAC3i-cBVHA",
  authDomain: "neflix-clone-594c2.firebaseapp.com",
  projectId: "neflix-clone-594c2",
  storageBucket: "neflix-clone-594c2.appspot.com",
  messagingSenderId: "790598797620",
  appId: "1:790598797620:web:45eee68474f43032cffd61",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
