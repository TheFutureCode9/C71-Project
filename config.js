import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAvL7EZoM24g6Hc2niU0IbLvM1wt70Nxzw",
    authDomain: "e-rider-a.firebaseapp.com",
    projectId: "e-rider-a",
    storageBucket: "e-rider-a.appspot.com",
    messagingSenderId: "390563726692",
    appId: "1:390563726692:web:a6a46d5cb7725210b8a671"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
