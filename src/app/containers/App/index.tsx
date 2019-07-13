import * as React from 'react'
import * as style from './style.css'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router'
import { TodoActions } from 'app/actions'
import { RootState } from 'app/reducers'
import { ITodoState } from '../../reducers/TodoReducer'
import { ITodo } from 'app/models'
import { omit } from 'app/utils'
import { Header, TodoList, Footer } from 'app/components'

const FILTER_VALUES = (Object.keys(ITodo.Filter) as (keyof typeof ITodo.Filter)[]).map(
  (key) => ITodo.Filter[key]
)

const FILTER_FUNCTIONS: Record<ITodo.Filter, (todo: ITodo) => boolean> = {
  [ITodo.Filter.SHOW_ALL]: () => true,
  [ITodo.Filter.SHOW_ACTIVE]: (todo) => !todo.completed,
  [ITodo.Filter.SHOW_COMPLETED]: (todo) => todo.completed
}

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    todosState: ITodoState
    actions: TodoActions
    filter: ITodo.Filter
  }
}

@connect(
  (state: RootState, ownProps): Pick<App.Props, 'todosState' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '')
    const filter = FILTER_VALUES.find((value) => value === hash) || ITodo.Filter.SHOW_ALL
    return { todosState: state.todos, filter }
  },
  (dispatch: Dispatch): Pick<App.Props, 'actions'> => ({
    actions: bindActionCreators(omit(TodoActions, 'Type'), dispatch)
  })
)
export class App extends React.Component<App.Props> {
  static defaultProps: Partial<App.Props> = {
    filter: ITodo.Filter.SHOW_ALL
  }

  constructor(props: App.Props, context?: any) {
    super(props, context)
    this.handleClearCompleted = this.handleClearCompleted.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleClearCompleted(): void {
    const hasCompletedTodo = this.props.todosState.todos.some((todo) => todo.completed || false)
    if (hasCompletedTodo) {
      this.props.actions.clearCompleted()
    }
  }

  handleFilterChange(filter: ITodo.Filter): void {
    this.props.history.push(`#${filter}`)
  }

  render() {
    const { todosState, actions, filter } = this.props
    const activeCount =
      todosState.todos.length - todosState.todos.filter((todo) => todo.completed).length
    const filteredTodosState = filter
      ? todosState.todos.filter(FILTER_FUNCTIONS[filter])
      : todosState.todos

    const completedCount = todosState.todos.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    )

    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <TodoList todos={filteredTodosState} actions={actions} />
        <Footer
          filter={filter}
          activeCount={activeCount}
          completedCount={completedCount}
          onClickClearCompleted={this.handleClearCompleted}
          onClickFilter={this.handleFilterChange}
        />
      </div>
    )
  }
}
