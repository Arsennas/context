export const MyReducer = (state, action) => {
  switch (action.type) {
    case 'icrement': {
      return {
        state,
        count: state.count + 1
      }
    }
    case 'decrement': {
      return {
        state,
        count: state.count === 0 ? 0 : state.count - 1
      }
    }
    case 'addTodo': {

      const { todos } = state;
      const { payload } = action

      const newItem = {
        id: Date.now(),
        title: action.payload,
        completed: false
      }
      const newArr = [...state.todos, newItem]
      return {
        ...state,
        todos: newArr
      }
    }
    case 'toggleCompletedId': {

      const { todos } = state;
      const { payload } = action

      const newArr = todos.map(item => item.id ===
        payload ? { ...item, completed: !item.completed }
        : item)

      return {
        ...state,
        todos: newArr
      }
    }
    case 'deleteTodo': {
      const { todos } = state;
      const { payload } = action

      const newArr = todos.filter(item => item.id !== payload)
      return{
        ...state,
        todos: newArr
      }
    }
    case 'getLoadTodos' : {
      return{
        ...state,
        todos:action.payload
      }
    }
    case 'getLoadUsers' : {
      return{
        ...state,
        users:action.payload
      }
    }
    default:
      return state
  }
}