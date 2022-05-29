import ToggleSideBar from 'components/molecules/ToggleSideBar'
import ToggleTheme from 'components/molecules/ToggleTheme'
import useGlobal from 'data/useContext/useGlobal'
import * as S from './styles'

const TopBar = () => {
  const { menu, theme } = useGlobal()

  return (
    <S.Container className="shadow-sm" themeSite={theme}>
      {!menu && <ToggleSideBar />}
      <div className="logo">
        <h2>Admin System</h2>
      </div>

      <ToggleTheme />
    </S.Container>
  )
}

export default TopBar
