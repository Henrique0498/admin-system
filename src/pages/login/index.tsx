import { useState } from 'react'

import ButtonOutline from 'components/atoms/Button/Outline'
import SingIn from './SingIn'
import SingUp from './SingUp'

import * as S from './styles'

const Login = () => {
  const [path, setPath] = useState<'singIn' | 'singUp'>('singIn')

  return (
    <S.Container>
      <S.RecoverPassword className="shadow-md"></S.RecoverPassword>
      <S.SingContainer className="shadow-md" path={path}>
        <div className={path === 'singUp' ? 'active' : ''}>
          <S.SingInCard>
            <h2>Já tem uma conta?</h2>
            <p>Bem vindo de volta!</p>

            <ButtonOutline onClick={() => setPath('singIn')}>
              Entrar
            </ButtonOutline>
          </S.SingInCard>
          <SingUp />
        </div>

        <div className={path === 'singIn' ? 'active' : ''}>
          <SingIn />
          <S.SingInCard>
            <h2>Não é cadastrado?</h2>
            <p>Cadastre-se! É simples e rápido!</p>

            <ButtonOutline onClick={() => setPath('singUp')}>
              Cadastre-se
            </ButtonOutline>
          </S.SingInCard>
        </div>
      </S.SingContainer>
    </S.Container>
  )
}

export default Login
