import { TodoModel, TrainingModel } from 'app/models'

export interface RootState {
  todos: RootState.TodoState
  trainings: RootState.TrainingState
  router?: any
}

export namespace RootState {
  export type TodoState = TodoModel[]
  export type TrainingState = TrainingModel[]
}
