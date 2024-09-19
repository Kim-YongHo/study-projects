import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import { Root } from 'react-dom/client';
import axios from 'axios';
import { fetchPosts } from './actions/posts'


type Props = {
  value: any
  onIncrement: () => void
  onDecrement: () => void
  store: any
}


interface Post {
  userId: number
  id: number
  title: string
}


function App({ value, onIncrement, onDecrement, store }: Props) {

  const dispatch = useDispatch()

  const counter = useSelector((state: RootState) => state.counter)
  const todos: string[] = useSelector((state: RootState) => state.todos)
  const posts: Post[] = useSelector((state: RootState) => state.posts.flat())


  const [todoValue, setTodoValue] = useState('')


  useEffect(() => {

    dispatch(fetchPosts())

  }, [dispatch])








  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value)
  }

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', text: todoValue })
    setTodoValue('')
  }

  return (
    <div className="App">
      Clicked: {counter} times
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>
      <ul>
        {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>

      <form onSubmit={addTodo}>
        <input type='text' value={todoValue} onChange={handleChange} />
        <input type='submit' />
      </form>
      <ul>
        {posts.map((post, index) => <li key={index}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
// function fetchPosts(): any {
//   throw new Error('Function not implemented.');
// }
