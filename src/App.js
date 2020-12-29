import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/todos";
import { AuthProvider } from "./context/Auth/AuthContext";
import Home from "./pages/Home";
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
        <Route path='/signUp' component={SignUp}/>
        <Route path='/signIn' component={SignIn}/>
        <Home/>
      </Switch>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
