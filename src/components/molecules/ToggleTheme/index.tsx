import useGlobal from 'context/GlobalContext/useGlobal'
import Switch from '@mui/material/Switch'

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
        checked={theme === 'dark'}
        onChange={handleSetTheme}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </S.Container>
  )
}

export default ToggleTheme
