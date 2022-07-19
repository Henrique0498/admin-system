import { InputProps } from './types'

import * as S from './styles'

const Input = ({
  validate,
  error,
  variant = 'outlined',
  color,
  label,
  onChange
}: InputProps) => {
  return (
    <S.Container
      onBlur={validate}
      variant={variant}
      label={label}
      color={color}
      onChange={onChange}
      error={error ? true : false}
    />
  )
}

export default Input
