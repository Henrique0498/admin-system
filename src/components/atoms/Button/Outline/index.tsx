import Typography from 'components/atoms/Typography'
import { ButtonProps } from '../types'
import * as S from './styles'

const ButtonOutline = ({
  children,
  color = 'purple',
  size = 'medium',
  type = 'button',
  ...props
}: ButtonProps) => {
  const sizeText =
    size === 'small'
      ? 'function_text-sm'
      : size === 'medium'
      ? 'function_text'
      : 'function_text-lg'

  return (
    <S.Container size={size} color={color} type={type} {...props}>
      <Typography type={sizeText}>{children}</Typography>
    </S.Container>
  )
}

export default ButtonOutline
