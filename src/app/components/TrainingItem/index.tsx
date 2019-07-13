import * as React from 'react'
import * as style from './style.css'
import { ITraining } from 'app/models'
import { TrainingActions } from 'app/actions'

export namespace TrainingItem {
  export interface Props {
    training: ITraining
    toggleFavorite: typeof TrainingActions.toggleFavoriteTraining
  }

  export interface State {
    favorite: boolean
  }
}

export class TrainingItem extends React.Component<TrainingItem.Props, TrainingItem.State> {
  constructor(props: TrainingItem.Props, context?: any) {
    super(props, context)
    this.state = { favorite: false }
  }

  handleDoubleClick() {
    this.setState({ favorite: true })
  }

  render() {
    const { training, toggleFavorite } = this.props

    const element = (
      <div className={style.view}>
        <label onDoubleClick={() => this.handleDoubleClick()}>{training.name}</label>
        <button
          className={style.destroy}
          onClick={() => {
            if (training.id) toggleFavorite(training.id)
          }}
        />
      </div>
    )

    return <li>{element}</li>
  }
}
