import firebase from "firebase"
require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyAKnUne2GrUtkL47xTXfcxaOhGJOhgVfds",
  authDomain: "e-library-8ef9b.firebaseapp.com",
  projectId: "e-library-8ef9b",
  storageBucket: "e-library-8ef9b.appspot.com",
  messagingSenderId: "246320688567",
  appId: "1:246320688567:web:1910e0e4093165fd9e4c32"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()