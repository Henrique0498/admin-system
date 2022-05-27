import SideBar from 'components/SideBar'
import TopBar from 'components/TopBar'
import * as S from './styles'

interface ControlRenderProps {
  children: React.ReactNode
}

const ControlRender = ({ children }: ControlRenderProps) => {
  return (
    <S.Container>
      <SideBar />
      <S.Body>
        <TopBar />
        {children}
      </S.Body>
    </S.Container>
  )
}

export default ControlRender
