import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { useUserStore } from './store/useUserStore';
import { useEffect } from 'react'

function App() {

  const {fetch, user } = useUserStore()
  console.log('user : ', user)
  useEffect(() => {
    fetch(1)
    
  }, [fetch])
  
  return (
    <div className="App">
      <header className='App-hearder'>
        <Counter />
        <TodoList />
      </header>
      <p>{user.name}</p>
    </div>
  );
}

export default App;
