import { InputProps } from './types'

import * as S from './styles'

const Input = ({
  validate,
  error,
  variant = 'outlined',
  ...props
}: InputProps) => {
  return (
    <S.Container
      onBlur={validate}
      variant={variant}
      {...props}
      error={error ? true : false}
    />
  )
}

export default Input
