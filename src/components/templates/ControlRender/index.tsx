import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import SideBar from 'components/organisms/SideBar'
import TopBar from 'components/organisms/TopBar'
import useGlobal from 'context/GlobalContext/useGlobal'
import useAuth from 'context/GlobalAuth/useAuth'

import * as S from './styles'
import Loading from 'components/atoms/Loading'

interface ControlRenderProps {
  children: React.ReactNode
}

const ControlRender = ({ children }: ControlRenderProps) => {
  const [isValidate, setIsValidate] = useState<boolean | undefined>(false)
  const { menu, theme } = useGlobal()
  const router = useRouter()
  const auth = useAuth()

  useEffect(() => {
    if (auth?.user && router.pathname.toLowerCase().includes('login')) {
      router.push('/')
      setIsValidate(true)
    } else {
      router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.user])

  if (!isValidate && !router.pathname.toLowerCase().includes('login')) {
    return (
      <S.Redirect className="text-purple-600">
        <Loading />
        <h3>Carregando...</h3>
      </S.Redirect>
    )
  }

  if (!auth?.user) {
    return <>{children}</>
  }

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

export default ControlRender
