import { handleActions } from 'redux-actions'
import { RootState } from './state'
import { TrainingActions } from 'app/actions/trainings'
import { TrainingModel } from 'app/models'

const initialState: RootState.TrainingState = []

export const trainingReducer = handleActions<RootState.TrainingState, TrainingModel>(
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
  initialState
)
