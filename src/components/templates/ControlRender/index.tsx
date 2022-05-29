import SideBar from 'components/organisms/SideBar'
import TopBar from 'components/organisms/TopBar'
import useGlobal from 'data/useContext/useGlobal'
import { useEffect, useState } from 'react'
import * as S from './styles'

interface ControlRenderProps {
  children: React.ReactNode
}

const ControlRender = ({ children }: ControlRenderProps) => {
  const [data, setData] = useState('')
  const { menu, theme } = useGlobal()

  useEffect(() => {
    setData(localStorage.getItem('menu') ?? '')
  }, [menu])

  if (data) {
    return (
      <S.Container themeSite={theme}>
        <S.SideBar>
          <SideBar />
        </S.SideBar>
        <S.Top>
          <TopBar />
        </S.Top>
        <S.Body>{children}</S.Body>
      </S.Container>
    )
  }

  return null
}

export default ControlRender
