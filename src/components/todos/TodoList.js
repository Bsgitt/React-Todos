import React, { useState ,useEffect} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { db } from '../../services/firebase';
import firebase from 'firebase'
function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
      db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
        setTodos(snapshot.docs.map(doc =>({id:doc.id ,todos:doc.data().todo,completeTodo:doc.data().completeTodo})))
        
        console.log(todos.todo)

    })
  },[])
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
  
    db.collection('todos').add({
      todo:newTodos,completeTodo:false,timestamp:firebase.firestore.FieldValue.serverTimestamp()
    
    })
    console.log(todo);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
   
  };

  const removeTodo = id => {
    db.collection('todos').doc(id).delete()
    // const removedArr = [...todos].filter(todo => todo.id !== id);

    // setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 className='text-center mb-2  text-3xl'>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
       
      />
    </>
  );
}

export default TodoList;