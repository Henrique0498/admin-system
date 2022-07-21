import { Checkbox as CheckboxMui } from '@mui/material'

import * as S from './styles'
import { CheckboxProps } from './types'

const Checkbox = ({ children, onChange, ...props }: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked)
    }
  }

  return (
    <S.Container>
      <CheckboxMui {...props} onChange={handleChange} />
      {children}
    </S.Container>
  )
}

export default Checkbox
