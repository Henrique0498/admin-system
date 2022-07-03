import ButtonOutline from 'components/atoms/Button/Outline'
import Input from 'components/atoms/Input'
import * as S from './styles'
import { SiLinkedin } from 'react-icons/si'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

const SingIn = () => {
  return (
    <S.Container>
      <S.Header>
        <h2>Entrar</h2>
      </S.Header>
      <S.FirebaseContainer>
        <S.FirebaseIcon className="shadow-sm">
          <FaGoogle />
        </S.FirebaseIcon>
        <S.FirebaseIcon className="shadow-sm">
          <FaFacebookF />
        </S.FirebaseIcon>
        <S.FirebaseIcon className="shadow-sm">
          <SiLinkedin />
        </S.FirebaseIcon>
      </S.FirebaseContainer>
      <S.Body>
        <Input
          id="outlined-basic"
          label="Usuário ou email"
          variant="outlined"
        />
        <Input id="outlined" label="Senha" variant="outlined" />

        <div className="containerButton">
          <ButtonOutline size="large">Entrar</ButtonOutline>
        </div>
      </S.Body>
    </S.Container>
  )
}

export default SingIn
