import React,{useReducer} from 'react';
import { store } from './MyContext';
import { MyReducer } from './reducer';
import { service } from './../http/service';

const defaultState ={
  count: 1,
  completed: false,
  todos: [],
  users:[]
}

const MyState = ({children}) => {

  const [state,dispatch] = useReducer(MyReducer,defaultState)

  const icrement = () => dispatch({type: 'icrement'})

  const decrement = () => dispatch({type: 'decrement'})

  const addTodo = (value) => {
    console.log(value)
  dispatch({type: 'addTodo',payload : value})
}

  const toggleCompletedId = (id) => {
    dispatch({type: 'toggleCompletedId',payload: id})
  }

  const deleteTodo = (id) => {
    dispatch({type: 'deleteTodo',payload: id})
  }

  const getLoadTodos = async () => {
    try{
      const response = await service.getTodos()
      dispatch({type:'getLoadTodos',payload:response.data})
    }catch (e){
      console.log(e)
    }
  }

  const getLoadUsers = async() => {
    try{
      const response = await service.getUsers()
      dispatch({type: 'getLoadUsers', payload:response.data})
    }catch (e){
      console.log(e)
    }
  }

  const postAddPosts = async(title) => {
    try{
      const response = await service.postTodos(title)
      console.log(response.data)
    }catch (e){
      console.log(e)
    }
  }
  return (
    <store.Provider value={{
      count: state.count,
      completed: state.completed,
      todos: state.todos,
      users: state.users,
      addTodo,
      toggleCompletedId,
      deleteTodo,
      decrement,
      icrement,
      getLoadTodos,
      getLoadUsers,
      postAddPosts
    }}>
      {children}
    </store.Provider>
  );
};

export default MyState;