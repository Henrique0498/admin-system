import { useState } from 'react'

import ButtonOutline from 'components/atoms/Button/Outline'
import SingIn from 'components/pages/Login/SingIn'
import SingUp from 'components/pages/Login/SingUp'

import * as S from './styles'
import { Grid } from '@mui/material'
import useMedia from 'hook/useMedia'

const Login = () => {
  const [path, setPath] = useState<'singIn' | 'singUp'>('singIn')
  const mobile = useMedia('(max-width: 900px)')

  function handleChangePage() {
    if (path === 'singIn') {
      setPath('singUp')
    } else {
      setPath('singIn')
    }
  }

  function controlRender() {
    if (mobile) {
      return (
        <Grid item xs={12} sm={8}>
          <S.ContainerMobileLogin>
            <S.LoginMobileCard
              className={`shadow-md ${path === 'singIn' ? 'first' : 'two'}`}
            >
              <SingIn />
              <button onClick={handleChangePage}>trocar</button>
            </S.LoginMobileCard>

            <S.LoginMobileCard
              className={`shadow-md ${path === 'singUp' ? 'first' : 'two'}`}
            >
              <SingUp />
              <button onClick={handleChangePage}>trocar</button>
            </S.LoginMobileCard>
          </S.ContainerMobileLogin>
        </Grid>
      )
    }

    return (
      <Grid item md={12} lg={8}>
        <S.LoginDesktopCard>
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
        </S.LoginDesktopCard>
      </Grid>
    )
  }

  return (
    <S.Container>
      <Grid container justifyContent="center">
        {controlRender()}
      </Grid>
    </S.Container>
  )

  // return (
  //   <S.Container>
  //     <S.RecoverPassword className="shadow-md"></S.RecoverPassword>
  //     <S.SingContainer className="shadow-md" path={path}>
  //       <div className={path === 'singUp' ? 'active' : ''}>
  //         <S.SingInCard>
  //           <h2>Já tem uma conta?</h2>
  //           <p>Bem vindo de volta!</p>

  //           <ButtonOutline onClick={() => setPath('singIn')}>
  //             Entrar
  //           </ButtonOutline>
  //         </S.SingInCard>
  //         <SingUp />
  //       </div>

  //       <div className={path === 'singIn' ? 'active' : ''}>
  //         <SingIn />
  //         <S.SingInCard>
  //           <h2>Não é cadastrado?</h2>
  //           <p>Cadastre-se! É simples e rápido!</p>

  //           <ButtonOutline onClick={() => setPath('singUp')}>
  //             Cadastre-se
  //           </ButtonOutline>
  //         </S.SingInCard>
  //       </div>
  //     </S.SingContainer>
  //   </S.Container>
  // )
}

export default Login
