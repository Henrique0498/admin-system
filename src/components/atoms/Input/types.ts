import { ChangeEvent, InputHTMLAttributes } from 'react'
import { ColorsType } from 'types/system'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  classNameContainer?: string
  color?: ColorsType
  adornments?: TypeAdornment[]
  uOnChange?: (elementEvent: ChangeEvent<HTMLInputElement>) => void
  uOnBlur?: (elementEvent: ChangeEvent<HTMLInputElement>) => void
}

type TypeAdornment = {
  title: string
  function: () => void
  children: React.ReactNode
}

export type InputStylesProps = {
  color?: ColorsType
}
