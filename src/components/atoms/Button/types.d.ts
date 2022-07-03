import { ColorsType } from 'types/system'

export interface ButtonProps {
  children: string | React.ReactNode
  color?: ColorsType
  size?: 'small' | 'medium' | 'large'
  onClick?: <T>(value?: T) => void
  type?: 'button' | 'submit'
  className?: string
}
