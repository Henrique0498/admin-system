import { ButtonProps } from '../types'

import * as S from './styles'
export function ButtonLink({
  children,
  color = 'violet',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <S.Container color={color} type={type} {...props}>
      {children}
      <span className="background" />
    </S.Container>
  )
}
