import { ButtonProps } from './types'

import * as S from './styles'

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <S.Container onClick={() => onClick()} className={`${className}`}>
      {children}
    </S.Container>
  )
}

export default Button
