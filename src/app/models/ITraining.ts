/** ITraining model definitions **/

export interface ITraining {
  id: number
  name: string
  description?: string
  downloadURL?: string
  embedURL?: string
  thumbnailURL?: string
  detailURL?: string
  contact?: string
  responsable?: string
  order?: number
  size: string
  type?: string
  duration: string
  trainingOfMonth?: string
  internalViews?: number
  externalViews?: number
  uploadedBy?: string
  createdBy?: string
  isVerified?: boolean
  isRestricted?: boolean
  likes?: number
  comments?: number
  zipPath?: string
  uploadedAt?: Date
  updatedAt?: Date
  createdAt?: Date
  //filters?: Array<IFilter>
}

export namespace ITraining {
  export enum Filter {
    SHOW_ALL = 'all',
    SHOW_ACTIVE = 'active',
    SHOW_COMPLETED = 'completed'
  }
}
