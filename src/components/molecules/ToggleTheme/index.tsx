import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

import Switch from 'components/atoms/Switch'
import useGlobal from 'data/useContext/useGlobal'

import * as S from './styles'

const ToggleTheme = () => {
  const { theme, setTheme } = useGlobal()

  function handleSetTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <S.Container>
      <Switch
        onClick={handleSetTheme}
        id="themeButton"
        value={theme === 'light'}
        valueOn={<HiOutlineSun />}
        valueOff={<HiOutlineMoon />}
      />
    </S.Container>
  )
}

export default ToggleTheme
