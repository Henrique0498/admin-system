import { ColorsType } from 'types/system'

export interface SelectProps {
  value: string
  labelId: string
  label: string
  setValue: (value: ChangeEventHandler<HTMLInputElement>) => void
  selects: SelectType[]
  color?: ColorsType
  error?: boolean
}

export type SelectType = {
  children: string | number
  value: string
}

export interface SelectStyleType {
  colors?: ColorsType
  error?: boolean
}
