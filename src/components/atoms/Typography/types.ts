import { ReactNode } from 'react'

export interface TypographyProps {
  type: TypesElement
  asComport?: TypesElement
  children: ReactNode
}

type TypesElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h6'
  | 'subtitle'
  | 'body'
  | 'body-sm'
  | 'body-xs'
  | 'body-xxs'
