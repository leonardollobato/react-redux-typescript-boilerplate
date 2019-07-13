import { handleActions } from 'redux-actions'
//import { RootState } from './state'
import { TodoActions } from 'app/actions/TodoActions'
import { ITodo } from 'app/models'

// Define the Training State
export interface ITodoState {
  readonly todos: ITodo[]
}

// Define the initial state
const initialTodoState: ITodoState = {
  todos: [
    {
      id: 1,
      text: 'first',
      completed: false
    }
  ]
}

export const todoReducer = handleActions<ITodoState, ITodo>(
  {
    [TodoActions.Type.ADD_TODO]: (state, action) => {
      if (action.payload && action.payload.text) {
        action.payload.id = state.todos.length + 1
        action.payload.completed = false
        return { todos: [action.payload, ...state.todos] }
      }
      return state
    },
    [TodoActions.Type.DELETE_TODO]: (state, action) => {
      console.log({ p: action })
      return {
        todos: state.todos.filter((todo) => action.payload && todo.id !== action.payload.id)
      }
    },
    [TodoActions.Type.EDIT_TODO]: (state, action) => {
      return {
        todos: state.todos.map((todo) => {
          if (!todo || !action || !action.payload) {
            return todo
          }
          return (todo.id || 0) === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        })
      }
    },
    [TodoActions.Type.COMPLETE_TODO]: (state, action) => {
      return {
        todos: state.todos.map((todo) => {
          return action.payload && todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        })
      }
    },
    [TodoActions.Type.COMPLETE_ALL]: (state, action) => {
      return { todos: state.todos.map((todo) => ({ ...todo, completed: true })) }
    },
    [TodoActions.Type.CLEAR_COMPLETED]: (state, action) => {
      return { todos: state.todos.filter((todo) => todo.completed === false) }
    }
  },
  initialTodoState
)
