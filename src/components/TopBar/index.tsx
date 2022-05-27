import useGlobal from 'data/useContext/useGlobal'
import * as S from './styles'

const TopBar = () => {
  const { menu, setMenu } = useGlobal()

  return (
    <S.Container className="bg-white shadow-lg">
      {!menu && (
        <button
          onClick={() => setMenu(!menu)}
          className="bg-gray-200 shadow-md"
        >
          x
        </button>
      )}
      <div className="logo">
        <h2>Admin</h2>
      </div>
    </S.Container>
  )
}

export default TopBar
