import { ButtonProps } from '../types'

import * as S from './styles'
const ButtonLink = ({
  children,
  color = 'purple',
  size = 'medium',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <S.Container size={size} color={color} type={type} {...props}>
      {children}
      <span className="background" />
    </S.Container>
  )
}

export default ButtonLink
