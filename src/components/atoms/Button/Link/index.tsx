import { TypeButtonLink } from '../types'

import * as S from './styles'
export function ButtonLink({
  children,
  color = 'violet',
  type = 'button',
  typeText = 'body-bold',
  ...props
}: TypeButtonLink) {
  return (
    <S.Container color={color} typeText={typeText} type={type} {...props}>
      {children}
    </S.Container>
  )
}
