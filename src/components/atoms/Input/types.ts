import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { ColorsType } from 'types/system'

export interface InputProps {
  color?: ColorsType
  variant?: 'outlined'
  id?: string
  label?: string
  error?: string
  type?: 'text' | 'password'
  setError?: Dispatch<SetStateAction<string>>
  value?: string
  setValue?: Dispatch<SetStateAction<string>>
  onChange?: (elementEvent: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (elementEvent: ChangeEvent<HTMLInputElement>) => void
  validate?: () => boolean
}

export type InputStylesProps = {
  color?: ColorsType
  error?: boolean
}
