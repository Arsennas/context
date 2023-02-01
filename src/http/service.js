import instance from "./settings";

const getTodos = () => {
  return instance.get('/todos?_limit=10')
}

const getUsers = () => {
  return instance.get('/users')
}

const postTodos = (title) => {
  console.log(title)
  return instance.post('/posts',{title,body:'bar',userId:1})
}

export const service = {
  getTodos,
  getUsers,
  postTodos
}