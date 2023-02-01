import React, { useContext, useState, useEffect } from 'react';
import { store } from '../context/MyContext';

const ListItem = ({ title, completed, id }) => {

  const { toggleCompletedId } = useContext(store)
  const { deleteTodo } = useContext(store)
  const [value, setValue] = useState('')

  useEffect(() => {
    if (title) {
      setValue(title)
    }
  }, [title])
  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text" />
      <input onClick={() => toggleCompletedId(id)} checked={completed} type="checkbox" />
      <button onClick={() => deleteTodo(id)} style={{ display: completed ? 'block' : 'none' }}>delete</button>
    </div>
  );
};

export default ListItem;