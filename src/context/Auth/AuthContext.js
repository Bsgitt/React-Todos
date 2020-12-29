import React, { createContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { app } from "../../services/firebase";

export const AuthContext = createContext()
export const AuthProvider = ({children})=>{
   const [currentUser ,setCurrentUser ]= useState(null)
   const [pending ,setPending] = useState(true)
   useEffect(()=>{
       app.auth().onAuthStateChanged((user)=>{
         setCurrentUser(user)
         setPending(false)
       })
   },[])
   if(pending){
     return<><p>Please Wait...</p> </>
   }
   return(
     <AuthContext.Provider value={{currentUser}}>
       {children}
     </AuthContext.Provider>
   )
}