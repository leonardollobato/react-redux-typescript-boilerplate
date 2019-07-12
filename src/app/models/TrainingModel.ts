/** TodoMVC model definitions **/

export interface TrainingModel {
  id: number
  text: string
  completed: boolean
}

export namespace TrainingModel {
  export enum Filter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}
