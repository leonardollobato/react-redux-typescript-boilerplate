import { createAction } from 'redux-actions'
import { TrainingModel } from 'app/models'

export namespace TrainingActions {
  export enum Type {
    TOGGLE_FAVORITE_TRAINING = 'TOGGLE_FAVORITE_TRAINING'
  }

  export const toggleFavoriteTraining = createAction<TrainingModel['id']>(
    Type.TOGGLE_FAVORITE_TRAINING
  )
}

export type TrainingActions = Omit<typeof TrainingActions, 'Type'>
