import TopBar from 'components/TopBar'
import * as S from './styles'

interface ControlRenderProps {
  children: React.ReactNode
}

const ControlRender = ({ children }: ControlRenderProps) => {
  return (
    <S.Container>
      <TopBar />
      {children}
    </S.Container>
  )
}

export default ControlRender
