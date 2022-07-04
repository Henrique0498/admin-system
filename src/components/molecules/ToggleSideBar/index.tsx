import Button from 'components/atoms/Button'
import useGlobal from 'context/GlobalContext/useGlobal'

import * as S from './styles'

const ToggleSideBar = () => {
  const { menu, setMenu } = useGlobal()

  return (
    <S.Container>
      <Button onClick={() => setMenu(!menu)}>
        <span className={`iconMenu ${menu ? 'active' : ''}`}>
          <span />
        </span>
      </Button>
    </S.Container>
  )
}

export default ToggleSideBar
