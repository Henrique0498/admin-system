import { createContext, Dispatch, useState } from 'react'

interface GlobalProviderProps {
  children: React.ReactNode
}

interface GlobalContextProps {
  menu: boolean
  setMenu: Dispatch<boolean>
}

const GlobalContext = createContext<GlobalContextProps>({
  setMenu: function setMeu(value: boolean) {
    return value
  },
  menu: false
})

export function GlobalProvider(props: GlobalProviderProps) {
  const [menu, setMenu] = useState(false)

  return (
    <GlobalContext.Provider value={{ menu, setMenu }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
