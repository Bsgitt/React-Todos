import React, { createContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { app, auth } from "../../services/firebase";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  //firebaseMethod
  function signUp(email,password){
    return  auth.createUserWithEmailAndPassword(email,password)
  }
  function signIn(email,password){
    return auth.signInWithEmailAndPassword(email,password)
  }
  function logout(){
    return auth.signOut()
  }
  function resetPassword(email){
    return auth.sendPasswordResetEmail(email)
  }
  function updateEmail(email){
    return currentUser.updateEmail(email)
  }
  function updatePassword(password){
    return currentUser.updatePassword(password)
  }
  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
    return unsubscribe
  }, []);
 
  return (
    <AuthContext.Provider value={{ currentUser,signIn,logout, signUp,resetPassword,updateEmail,updatePassword,pending}}>
      {!pending && children}
    </AuthContext.Provider>
  );
};
