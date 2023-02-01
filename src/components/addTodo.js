import React, { useState,useContext } from 'react';
import { store } from '../context/MyContext';

const AddTodo = () => {

  const {addTodo,postAddPosts} = useContext(store)

  const [value, setValue] = useState('');

  const handlerSumbit = async(e) => {
    e.preventDefault()
    await addTodo(value)
    await postAddPosts(value)
    setValue('')
  }

  return (
    <form onSubmit={handlerSumbit}>
      <input
        type="text"
        placeholder='text'
        value={value}
        onChange={(e) => setValue(e.target.value)} />
      <button type='submit'>add</button>
    </form>
  );
};

export default AddTodo;