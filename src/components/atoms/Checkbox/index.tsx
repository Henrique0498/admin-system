import { Checkbox as CheckboxMui } from '@mui/material'

import * as S from './styles'
import { CheckboxProps } from './types'

const Checkbox = ({ children, ...props }: CheckboxProps) => {
  return (
    <S.Container>
      <CheckboxMui {...props} />
      {children}
    </S.Container>
  )
}

export default Checkbox
