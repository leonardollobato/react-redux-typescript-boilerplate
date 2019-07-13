import { createAction } from 'redux-actions'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { ITraining } from 'app/models'

export namespace TrainingActions {
  export enum Type {
    TOGGLE_FAVORITE_TRAINING = 'TOGGLE_FAVORITE_TRAINING',
    FETCH_TRAINING_BEGIN = 'FETCH_TRAINING_BEGIN',
    FETCH_TRAINING_SUCCESS = 'FETCH_TRAINING_SUCCESS',
    FETCH_TRAINING_FAILURE = 'FETCH_TRAINING_FAILURE'
  }

  export const toggleFavoriteTraining = createAction<ITraining['id']>(Type.TOGGLE_FAVORITE_TRAINING)

  export const fetchTrainingBegin = createAction(Type.FETCH_TRAINING_BEGIN)
  export const fetchTrainingSuccess = createAction(Type.FETCH_TRAINING_SUCCESS)
  export const fetchTrainingFailure = createAction(Type.FETCH_TRAINING_FAILURE)

  export const fetchTrainings = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    // Invoke API
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return new Promise<void>((resolve) => {
        dispatch(fetchTrainingBegin())
        setTimeout(() => {
          fetch('../../assets/trainings.json').then((data: Response) => {
            dispatch(fetchTrainingSuccess(data))
          })
          resolve()
        }, 3000)
      })
    }
  }
}

export type TrainingActions = Omit<typeof TrainingActions, 'Type'>
