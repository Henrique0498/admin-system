import { RepositoryIcons } from './RepositoryIcons'

export interface TypeIcon {
  icon: keyof typeof RepositoryIcons
  className?: string
}
