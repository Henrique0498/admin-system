import { TypographyProps } from './types'

import * as S from './styles'

export function Typography({
  children,
  type = 'body',
  ...props
}: TypographyProps) {
  return (
    <S.Container type={type} {...props}>
      {children}
    </S.Container>
  )
}
