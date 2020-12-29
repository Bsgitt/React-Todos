import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import firebase from "firebase";
import Todo from "./Todo";
import { db } from "../../services/firebase";
function TodoList() {
  const [isLoading,setIsLoading] =useState(true)
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fecth = async()=>{
      db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
           id: doc.id,
            todos: doc.data().todo,
            isComplete:doc.data().completeTodo
          }))
          )
          setIsLoading(false)
          console.log('eff',...todos);
      });
    }
    fecth()
  }, []);
  const addTodo = (todo) => {
    if (!todo.todos || /^\s*$/.test(todo.todos)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(db.collection('todos').add({
      todo:newTodos,
      completeTodo: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }));
    console.log(...newTodos);
  };

  const updateTodo = (id, newValue) => {
    if (!todos.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(
      db.collection('todos').doc(id).set({
        id:todos.id,
        todo:todos,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

      },{merge:true})
    );
  };

  const removeTodo = async(id) => {
   await db.collection("todos").doc(id).delete();
   
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map(async(todo) => {
     await db.collection("todos").doc(id).update({
        completeTodo: !todo.isComplete,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    
      return todo;
    });
    setTodos(updatedTodos);
   
    console.log("updateTodo", todos);
  };

  return (
    <>
      <h1 className="text-center mb-2  text-3xl">What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
     {!isLoading &&todos.length ===0 && <h1>No have todo</h1> }
     {isLoading ? (<h1>Loading...</h1>):(<>  <Todo
        isLoading={isLoading}
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      /></>)}
    </>
  );
}

export default TodoList;
