import * as React from 'react'
import { TrainingModel } from 'app/models'
import { TrainingActions } from 'app/actions'
import { TrainingItem } from '../TrainingItem'

import * as style from './style.css'

//import { TodoItem } from '../TodoItem'

export namespace Home {
  export interface Props {
    trainings: TrainingModel[]
    actions: TrainingActions
  }
}

export class Home extends React.Component<Home.Props> {
  render() {
    const { trainings, actions } = this.props
    return (
      <section className={style.main}>
        <ul className={style.normal}>
          {trainings.map((training) => (
            <TrainingItem
              key={training.id}
              training={training}
              toggleFavorite={actions.toggleFavoriteTraining}
            />
          ))}
        </ul>
      </section>
    )
  }
}
