/** TodoMVC model definitions **/

export interface ITodo {
  id: number
  text: string
  completed: boolean
}

export namespace ITodo {
  export enum Filter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}
