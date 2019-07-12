import * as React from 'react'
import { TrainingModel } from 'app/models/TrainingModel'

//import { TodoItem } from '../TodoItem'

export namespace Home {
  export interface Props {
    trainings: TrainingModel[]
    actions: TrainingActions
  }
}

export class Home extends React.Component<TodoList.Props> {
  renderToggleAll(): JSX.Element | void {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      const hasIncompleted = todos.some((todo) => !todo.completed)
      return (
        <input
          className={style.toggleAll}
          type="checkbox"
          checked={hasIncompleted}
          onChange={actions.completeAll}
        />
      )
    }
  }

  render() {
    const { todos, actions } = this.props
    return (
      <section className={style.main}>
        {this.renderToggleAll()}
        <ul className={style.normal}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              completeTodo={actions.completeTodo}
              deleteTodo={actions.deleteTodo}
              editTodo={actions.editTodo}
            />
          ))}
        </ul>
      </section>
    )
  }
}
