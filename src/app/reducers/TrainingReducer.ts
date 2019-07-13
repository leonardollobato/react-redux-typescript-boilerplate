import { handleActions } from 'redux-actions'
import { TrainingActions } from 'app/actions/TrainingActions'
import { ITraining } from 'app/models'

// Define the Training State
export interface ITrainingState {
  readonly trainings: ITraining[]
}

// Define the initial state
const initialTrainingState: ITrainingState = {
  trainings: []
}

export const trainingReducer = handleActions<ITrainingState, ITraining>(
  {
    [TrainingActions.Type.FETCH_TRAINING_BEGIN]: (state, action) => {
      return state
    },

    [TrainingActions.Type.FETCH_TRAINING_SUCCESS]: (state, action) => {
      return state
    },

    [TrainingActions.Type.FETCH_TRAINING_FAILURE]: (state, action) => {
      return state
    },

    [TrainingActions.Type.TOGGLE_FAVORITE_TRAINING]: (state, action) => {
      return state
    }
  },
  initialTrainingState
)
