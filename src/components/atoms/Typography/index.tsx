import { TypographyProps } from './types'

import * as S from './styles'

const Typography = ({ children }: TypographyProps) => {
  return <S.Container>{children}</S.Container>
}

export default Typography
