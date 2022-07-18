import { ColorsType } from 'types/system'

export interface SelectProps {
  value: string
  labelId: string
  label: string
  selects: SelectType[]
  color?: ColorsType
  error: string
  onChange: ({ currentTarget }: FormEvent<HTMLInputElement>) => void
  setError: Dispatch<SetStateAction<string>>
  setValue: Dispatch<SetStateAction<string>>
  validate: () => boolean
  variant?: 'outlined'
}

export type SelectType = {
  children: string | number
  value: string
}

export interface SelectStyleType {
  colors?: ColorsType
  error?: boolean
}
