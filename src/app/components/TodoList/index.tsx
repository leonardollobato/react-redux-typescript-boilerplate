import * as React from 'react'
import * as style from './style.css'
import { TodoActions } from 'app/actions/TodoActions'
import { TodoItem } from '../TodoItem'
import { ITodo } from 'app/models'

export namespace TodoList {
  export interface Props {
    todos: ITodo[]
    actions: TodoActions
  }
}

export class TodoList extends React.Component<TodoList.Props> {
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
    console.log({ todos })
    return (
      <section className={style.main}>
        {/* {this.renderToggleAll()} */}
        <ul className={style.normal}>
          {todos &&
            todos.map((todo) => (
              <TodoItem
                key={todo.text}
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
