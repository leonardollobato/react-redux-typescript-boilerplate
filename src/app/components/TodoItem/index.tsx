import * as React from 'react'
import * as classNames from 'classnames'
import * as style from './style.css'
import { ITodo } from 'app/models'
import { TodoActions } from 'app/actions'
import { TodoTextInput } from '../TodoTextInput'

export namespace TodoItem {
  export interface Props {
    todo: ITodo
    editTodo: typeof TodoActions.editTodo
    deleteTodo: typeof TodoActions.deleteTodo
    completeTodo: typeof TodoActions.completeTodo
  }

  export interface State {
    editing: boolean
  }
}

export class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {
  constructor(props: TodoItem.Props, context?: any) {
    super(props, context)
    this.state = { editing: false }
  }

  handleDoubleClick() {
    this.setState({ editing: true })
  }

  handleSave(todo: ITodo) {
    const { id, text } = todo
    if (text.length === 0) {
      this.props.deleteTodo(todo)
    } else {
      this.props.editTodo({ id, text })
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(text) => todo.id && this.handleSave(todo)}
        />
      )
    } else {
      element = (
        <div className={style.view}>
          <input
            className={style.toggle}
            type="checkbox"
            checked={todo.completed}
            onChange={() => todo.id && completeTodo(todo)}
          />
          <label onDoubleClick={() => this.handleDoubleClick()}>{todo.text}</label>
          <button
            className={style.destroy}
            onClick={() => {
              if (todo.id) deleteTodo(todo)
            }}
          />
        </div>
      )
    }

    // TODO: compose
    const classes = classNames({
      [style.completed]: todo.completed,
      [style.editing]: this.state.editing,
      [style.normal]: !this.state.editing
    })

    return <li className={classes}>{element}</li>
  }
}
