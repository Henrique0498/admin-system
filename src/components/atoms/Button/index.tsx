import * as S from './styles'

interface ButtonProps {
  children: string | React.ReactNode
  onClick: <T>(value?: T) => void
  className?: string
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <S.Container onClick={() => onClick()} className={`${className}`}>
      {children}
    </S.Container>
  )
}

export default Button
