import { createAction } from 'redux-actions'
import { ITodo } from 'app/models'

export namespace TodoActions {
  export enum Type {
    ADD_TODO = 'ADD_TODO',
    EDIT_TODO = 'EDIT_TODO',
    DELETE_TODO = 'DELETE_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO',
    COMPLETE_ALL = 'COMPLETE_ALL',
    CLEAR_COMPLETED = 'CLEAR_COMPLETED'
  }

  export const addTodo = createAction<PartialPick<ITodo, 'text'>>(Type.ADD_TODO)
  export const editTodo = createAction<PartialPick<ITodo, 'id'>>(Type.EDIT_TODO)
  export const deleteTodo = createAction<ITodo>(Type.DELETE_TODO)
  export const completeTodo = createAction<ITodo>(Type.COMPLETE_TODO)
  export const completeAll = createAction(Type.COMPLETE_ALL)
  export const clearCompleted = createAction(Type.CLEAR_COMPLETED)
}

export type TodoActions = Omit<typeof TodoActions, 'Type'>
