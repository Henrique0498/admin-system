import { useContext } from 'react'
import GlobalContext from 'data/context/GlobalContext'

const useGlobal = () => useContext(GlobalContext)

export default useGlobal
