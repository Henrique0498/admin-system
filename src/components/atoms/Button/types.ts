import { ButtonHTMLAttributes } from 'react'
import { ColorsType } from 'types/system'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode
  color?: ColorsType
  size?: 'small' | 'medium' | 'large'
}
