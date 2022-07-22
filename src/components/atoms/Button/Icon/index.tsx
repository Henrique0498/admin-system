import { ButtonProps } from '../types'

import * as S from './styles'

const ButtonIcon = ({ children, ...props }: ButtonProps) => {
  return <S.Container {...props}>{children}</S.Container>
}

export default ButtonIcon
