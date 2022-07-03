import ButtonOutline from 'components/atoms/Button/Outline'
import SingIn from './SingIn'
import * as S from './styles'

const Login = () => {
  return (
    <S.Container>
      <S.RecoverPassword className="shadow-md"></S.RecoverPassword>
      <S.SingContainer className="shadow-md">
        <SingIn />
        <S.SingInCard>
          <h2>Não é cadastrado?</h2>
          <p>Cadastre-se! É simples e rápido!</p>

          <ButtonOutline>Cadastre-se!</ButtonOutline>
        </S.SingInCard>
      </S.SingContainer>
    </S.Container>
  )
}

export default Login
