import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/todos";
import Home from "./pages/Home";
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/dashboard' component={Dashboard}/>
        <Home/>
      </Switch>
    </Router>
     
    </>
  );
}

export default App;
