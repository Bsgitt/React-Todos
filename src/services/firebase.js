import firebase from "firebase";
import "firebase/auth";
export const app = firebase.initializeApp({
  apiKey: "AIzaSyD83RDteZWfxJ1osidoQpids2QZNpS1u6Y",
  authDomain: "reacttodo-63f86.firebaseapp.com",
  projectId: "reacttodo-63f86",
  storageBucket: "reacttodo-63f86.appspot.com",
  messagingSenderId: "907500143910",
  appId: "1:907500143910:web:a38b726267543f88716de7",
  measurementId: "G-8D6B17J6HW",
});
  const auth = app.auth()
 const db = app.firestore()
export {db,auth}

