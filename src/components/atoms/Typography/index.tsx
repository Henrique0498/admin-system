import { TypographyProps } from './types'

import * as S from './styles'

const Typography = ({ children, ...props }: TypographyProps) => {
  return <S.Container {...props}>{children}</S.Container>
}

export default Typography
