import { createAction } from 'redux-actions'
import { TrainingModel } from 'app/models'

export namespace TrainingActions {
  export enum Type {
    TOGGLE_FAVORITE_TRAINING = 'TOGGLE_FAVORITE_TRAINING',
    FETCH_TRAINING_BEGIN = 'FETCH_TRAINING_BEGIN',
    FETCH_TRAINING_SUCCESS = 'FETCH_TRAINING_SUCCESS',
    FETCH_TRAINING_FAILURE = 'FETCH_TRAINING_FAILURE'
  }

  export const toggleFavoriteTraining = createAction<TrainingModel['id']>(
    Type.TOGGLE_FAVORITE_TRAINING
  )

  export const fetchTrainingBegin = createAction(Type.FETCH_TRAINING_BEGIN)
  export const fetchTrainingSuccess = createAction(Type.FETCH_TRAINING_SUCCESS)
  export const fetchTrainingFailure = createAction(Type.FETCH_TRAINING_FAILURE)
}

export type TrainingActions = Omit<typeof TrainingActions, 'Type'>
