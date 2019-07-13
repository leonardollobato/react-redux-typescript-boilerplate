import { ITrainingState } from './TrainingReducer'
import { ITodoState } from './TodoReducer'

export interface RootState {
  todos: ITodoState
  trainings: ITrainingState
  router?: any
}
