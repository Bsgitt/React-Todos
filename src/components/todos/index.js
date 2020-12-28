import React from "react";
import TodoList from "./TodoList";
// import firebase from "firebase";
// import { app } from "../../services/firebase";
 function Dashboard() {
  return (
    <>
     
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}
export default Dashboard