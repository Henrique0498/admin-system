import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { ThemeType } from 'types/system'

interface GlobalProviderProps {
  children: React.ReactNode
}

interface GlobalContextProps {
  menu: boolean
  setMenu: Dispatch<boolean>
  theme: ThemeType
  setTheme: Dispatch<SetStateAction<ThemeType>>
}

const GlobalContext = createContext<GlobalContextProps>({
  setMenu: function setMeu(value: boolean) {
    return value
  },
  menu: true,
  theme: 'light',
  setTheme: (value: SetStateAction<ThemeType>) => {
    return value
  }
})

export function GlobalProvider(props: GlobalProviderProps) {
  const [menu, setMenu] = useState<boolean>(true)
  const [theme, setTheme] = useState<ThemeType>('dark')

  useEffect(() => {
    setTheme(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light')
    setMenu(localStorage.getItem('menu') === 'true')
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    localStorage.setItem('menu', menu.toString() ?? 'true')
  }, [menu, theme])

  return (
    <GlobalContext.Provider value={{ menu, setMenu, theme, setTheme }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
