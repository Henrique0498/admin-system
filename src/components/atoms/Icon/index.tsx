import React from 'react'
import { RepositoryIcons } from './RepositoryIcons'
import { TypeIcon } from './type'

export const Icon = ({ icon, className }: TypeIcon) => {
  return <i className={className}>{RepositoryIcons[icon]}</i> ?? <div>N/A</div>
}
