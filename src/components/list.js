import React,{useContext,useEffect} from 'react';
import { store } from '../context/MyContext';
import ListItem from './list-item';

const List = () => {

  const {todos,getLoadTodos,getLoadUsers} = useContext(store)

  useEffect(() => {
    getLoadTodos()
  },[])

  return (
    <div>
      {
        todos.map(item => {
          return <ListItem key={item.id} {...item}/>
        })
      }
    </div>
  );
};

export default List;