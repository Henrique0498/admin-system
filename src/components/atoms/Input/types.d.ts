import { OutlinedTextFieldProps } from '@mui/material'
import { ColorsType } from 'types/system'

export interface InputProps {
  colorCustom?: ColorsType
  variant?: 'outlined'
  label?: string
  error: string
  setError: Dispatch<SetStateAction<string>>
  value: string
  setValue: Dispatch<SetStateAction<string>>
  onChange: ({ currentTarget }: FormEvent<HTMLInputElement>) => void
  validate: () => boolean
}

export interface InputStylesProps extends OutlinedTextFieldProps {
  colorCustom?: ColorsType
}
