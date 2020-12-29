import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import {AuthProvider} from './context/Auth/AuthContext'
import Dashboard from "./components/todos";
<<<<<<< HEAD
import { AuthProvider } from "./context/Auth/AuthContext";
import Home from "./pages/Home";
=======
>>>>>>> 305e7f393a6cccd831988eff8fab62286dec0c9b
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PriveRoute from "./PrivateRoute";
function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <Switch>
        <PriveRoute exact path='/dashboard' component={Dashboard}/>
<<<<<<< HEAD
        <Route path='/signUp' component={SignUp}/>
        <Route path='/signIn' component={SignIn}/>
        <Home/>
=======
        <Route path='/signin' component={SignIn}/>
        <Route path='/signUp' component={SignUp}/>
>>>>>>> 305e7f393a6cccd831988eff8fab62286dec0c9b
      </Switch>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
