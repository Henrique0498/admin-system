import { OutlinedTextFieldProps } from '@mui/material'
import { ColorsType } from 'types/system'

export interface InputProps {
  color?: ColorsType
  variant?: 'outlined'
  label?: string
  error: string
  type?: 'text' | 'password'
  setError: Dispatch<SetStateAction<string>>
  value: string
  setValue: Dispatch<SetStateAction<string>>
  onChange: ({ currentTarget }: FormEvent<HTMLInputElement>) => void
  validate: () => boolean
}

export type InputStylesProps = Modify<
  OutlinedTextFieldProps,
  {
    color?: ColorsType
  }
>
