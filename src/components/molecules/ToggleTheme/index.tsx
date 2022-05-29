import useGlobal from 'data/useContext/useGlobal'

const ToggleTheme = () => {
  const { theme, setTheme } = useGlobal()

  function handleSetTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return <div onClick={handleSetTheme}>ToggleTheme</div>
}

export default ToggleTheme
