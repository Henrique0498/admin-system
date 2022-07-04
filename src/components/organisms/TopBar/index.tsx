import Title from 'components/atoms/Title'
import ToggleSideBar from 'components/molecules/ToggleSideBar'
import ToggleTheme from 'components/molecules/ToggleTheme'
import useGlobal from 'context/GlobalContext/useGlobal'
import * as S from './styles'

const TopBar = () => {
  const { menu, theme } = useGlobal()

  return (
    <S.Container className="shadow-sm" themeSite={theme}>
      {!menu && <ToggleSideBar />}

      <Title />

      <ToggleTheme />
    </S.Container>
  )
}

export default TopBar
