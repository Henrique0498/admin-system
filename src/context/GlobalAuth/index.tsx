import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface AuthProviderProps {
  children: React.ReactNode
}

interface AuthContextProps {
  user?: UserType | null
  setUser: Dispatch<SetStateAction<UserType | null>>
}

type UserType = {
  username: string
  name: string
  token: string
  photo: string
}

const AuthContext = createContext<AuthContextProps | null>(null)

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<UserType | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
