import './App.css';
import React, { useContext,useState } from 'react';
import { store } from './context/MyContext';
import AddTodo from './components/addTodo';
import List from './components/list';

function App() {

  const { count, icrement, decrement, users, getLoadUsers } = useContext(store)


  return (
    <div className="App">
      <div className='wrapper'>
        <div className='left'>
          <button onClick={() => getLoadUsers()}>getUsers</button>
          <ol>
            {
              users.map(item => {
                return <li key={item.id}>{item.username}</li>
              })
            }
          </ol>
        </div>
        <div className='right'>
          <AddTodo />
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
