import * as React from 'react'
import { ITraining } from 'app/models'
import { TrainingActions } from 'app/actions'
//import { TrainingItem } from '../TrainingItem'

import * as style from './style.css'

//import { TodoItem } from '../TodoItem'

export namespace Home {
  export interface Props {
    trainings: ITraining[]
    actions: TrainingActions
  }
}

export class Home extends React.Component<Home.Props> {
  fetchTraining() {}

  render() {
    //const { trainings, actions } = this.props
    return (
      <div>
        <h1>Hello</h1>
        <section className={style.main}>
          <h1>Home</h1>
          <ul className={style.normal}>
            <li>teste</li>
          </ul>
        </section>
      </div>
    )
  }
}
