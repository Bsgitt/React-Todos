import React, { useState, useEffect, createContext } from "react";
import firebase from "firebase";
import { app } from "../../services/firebase";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/dashboard",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
      // signInSuccessWithAuthResult: async ({currentUser})=>{
      //   return false
      // }
    },
  };
  useEffect(() => {
  const unsubscribe=  app.auth().onAuthStateChanged(async(user) => {
      setCurrentUser(!!user);
    });
    return unsubscribe
  }, []);
  return (
    <UserContext.Provider value={{currentUser,uiConfig}}>{children}</UserContext.Provider>
  );
};

