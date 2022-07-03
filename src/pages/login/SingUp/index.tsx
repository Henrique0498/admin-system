import ButtonOutline from 'components/atoms/Button/Outline'
import Input from 'components/atoms/Input'
import * as S from './styles'
import { SiLinkedin } from 'react-icons/si'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

const SingUp = () => {
  return (
    <S.Container>
      <S.Header>
        <h2>Cadastre-se</h2>
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
        <Input id="outlined-singUP" label="Usuário" variant="outlined" />

        <Input id="outlined-singUPa" label="E-mail" variant="outlined" />

        <Input id="outlined-aSingUP" label="Senha" variant="outlined" />

        <div className="containerButton">
          <ButtonOutline size="large" color="violet">
            Cadastrar
          </ButtonOutline>
        </div>
      </S.Body>
    </S.Container>
  )
}

export default SingUp
