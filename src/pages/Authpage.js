import React, { useContext } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { UserContext } from "../context/Auth/UserContext";
import { app } from "../services/firebase";
const AuthPage = () => {
  
const {currentUser,uiConfig} =useContext(UserContext)

if (!currentUser) {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}
return (
  <div>
    <h1>My App</h1>
    <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
    <img src={firebase.auth().currentUser.photoURL} alt='' className='w-20'/>
    <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
  </div>
);

};

export default AuthPage;
