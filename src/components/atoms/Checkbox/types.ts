import { InputHTMLAttributes } from 'react'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: string | React.ReactNode
  checked?: boolean
}
