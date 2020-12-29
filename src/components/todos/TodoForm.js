import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../services/firebase';
import firebase from 'firebase'
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit( db.collection('todos').add({
      todo:input,
      completeTodo:false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }))
   
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center'>
      {props.edit ? (
        <>
           <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;