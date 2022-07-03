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

  return children

  if (data) {
    return (
      <S.Container themeSite={theme} className={theme}>
        <S.SideBar menu={menu}>
          <SideBar />
        </S.SideBar>
        <S.Top>
          <TopBar />
        </S.Top>
        <S.Body className="dark:text-gray-200">{children}</S.Body>
      </S.Container>
    )
  }

  return null
}

export default ControlRender
