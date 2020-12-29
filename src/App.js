import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import {AuthProvider} from './context/Auth/AuthContext'
import Dashboard from "./components/todos";
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
        <Route path='/signin' component={SignIn}/>
        <Route path='/signUp' component={SignUp}/>
      </Switch>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
