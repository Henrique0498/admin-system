import { ButtonProps } from '../types'
import * as S from './styles'

const ButtonOutline = ({
  children,
  color = 'purple',
  size = 'medium',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <S.Container size={size} color={color} type={type} {...props}>
      {children}
    </S.Container>
  )
}

export default ButtonOutline
