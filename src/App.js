import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css";
import {AuthProvider} from './context/Auth/AuthContext'
import Dashboard from "./components/todos";
import SignIn from "./pages/SignForm/SignIn";
import SignUp from "./pages/SignForm/SignUp";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "./pages/SignForm/ForgetPassword";
import Home from "./pages/Home";
function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
        <Route path='/signup' component={SignUp}/>
        <Route path='/signin' component={SignIn}/>
        <Route path="/forgot-password" component={ForgetPassword} />
        <Route path='/' component={Home}/>
      </Switch>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
