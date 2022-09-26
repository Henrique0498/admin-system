import { FormEvent } from 'react'
// import { toast } from 'react-toastify'

// import { authentication } from 'services/login/singIn'
// import { POST_AUTHENTICATION } from 'services/routesApi'
import ButtonOutline from 'components/atoms/Button/Outline'
import { Input } from 'components/atoms/Input'
import { ButtonLink } from 'components/atoms/Button/Link'
import useForm from 'hook/useForm'
// import useAuth from 'context/GlobalAuth/useAuth'

import * as S from './styles'
import { Icon } from 'components/atoms/Icon'
import Typography from 'components/atoms/Typography'

const SingIn = () => {
  const { register, getValue } = useForm()
  // const password = useForm('password')
  // const auth = useAuth()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log(getValue())

    // const data = [user, password]

    // if (!data.every((item) => item.validate())) {
    //   let message = 'Por favor, preencha os campos corretamente.'

    //   data.map((item) => {
    //     if (item.error) {
    //       message = item.error
    //     }
    //     return item
    //   })

    //   toast.error(message)
    // } else {
    //   await authentication({
    //     url: POST_AUTHENTICATION,
    //     username: user.value,
    //     password: password.value
    //   })
    //     .then(({ data }) => auth?.setUser(data))
    //     .catch((err) => {
    //       toast.error(err?.response?.data?.error ?? 'Erro desconhecido')
    //     })
    // }
  }

  return (
    <S.Container>
      <S.Background>
        <Icon
          icon="iconBackgroundBalls"
          className="background-icon_top_right"
        />
        <Icon
          icon="iconBackgroundBalls"
          className="background-icon_bottom_left"
        />
      </S.Background>
      <S.Header>
        <Typography type="h2">Entrar</Typography>
      </S.Header>
      <S.Body onSubmit={handleSubmit}>
        <div className="container_input">
          <Input
            label="Usuário ou email:"
            {...register('singInUser', {
              isRequired: true
            })}
          />

          <Input
            label="Senha:"
            type="password"
            {...register('singInPassword', {
              isRequired: true
            })}
          />
        </div>

        <div className="recover-password">
          <ButtonLink>
            <Typography type="subtitle">recuperar senha</Typography>
          </ButtonLink>
        </div>

        <div className="containerButton">
          <ButtonOutline size="large" color="violet" type="submit">
            Entrar
          </ButtonOutline>
        </div>
      </S.Body>
    </S.Container>
  )
}

export default SingIn
