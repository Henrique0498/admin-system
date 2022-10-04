import { FormEvent } from 'react'
import { toast } from 'react-toastify'

import { authentication } from 'services/login/singIn'
import { POST_AUTHENTICATION } from 'services/routesApi'
import { ButtonOutline } from 'components/atoms/Button/Outline'
import { Input } from 'components/atoms/Input'
import { ButtonLink } from 'components/atoms/Button/Link'
import { Typography } from 'components/atoms/Typography'
import useForm from 'hook/useForm'
import useAuth from 'context/GlobalAuth/useAuth'

import * as S from './styles'

const SingIn = () => {
  const { register, getValue, validationAll } = useForm()
  const auth = useAuth()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (validationAll()) {
      const keysInputs = Object.keys(getValue())
      const values = getValue()
      const keyInputError = keysInputs.find((key) => values[key].error) ?? ''

      toast.error(values[keyInputError].message)
    } else {
      const values = getValue()

      await authentication({
        url: POST_AUTHENTICATION,
        username: values.singInUser.value,
        password: values.singInPassword.value
      })
        .then(({ data }) => {
          if (auth) {
            auth.setUser(data)
          } else {
            toast.error('Erro de sistema')
          }
        })
        .catch((err) => {
          toast.error(err?.response?.data?.error ?? 'Erro desconhecido')
        })
    }
  }

  return (
    <S.Container>
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
          <ButtonLink>Recuperar senha</ButtonLink>
        </div>

        <div className="container_button">
          <ButtonOutline size="large" color="violet" type="submit">
            Entrar
          </ButtonOutline>
        </div>
      </S.Body>
    </S.Container>
  )
}

export default SingIn
