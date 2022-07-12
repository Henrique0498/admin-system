import ButtonOutline from 'components/atoms/Button/Outline'
import Input from 'components/atoms/Input'
import { SiLinkedin } from 'react-icons/si'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import { FormEvent, useState } from 'react'
import { api } from 'services/config'

import * as S from './styles'
import { toast } from 'react-toastify'
import useAuth from 'context/GlobalAuth/useAuth'
import { routerAuthentication } from 'services/routesApi'

type InputType = {
  error?: boolean
  value: string
}

type RequestType = {
  username: string
  name: string
  token: string
  photo: string
}

const SingIn = () => {
  const [user, setUser] = useState<InputType>({ value: '' })
  const [password, setPassword] = useState<InputType>({ value: '' })
  const auth = useAuth()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (user.value === '') {
      setUser((props) => ({ ...props, error: true }))
    } else if (password.value === '') {
      setPassword((props) => ({ ...props, error: true }))
    } else {
      const { body, url } = routerAuthentication(user.value, password.value)

      await api
        .post<RequestType>(url, body)
        .then(({ data }) => auth?.setUser(data))
        .catch((err) => {
          toast.error(err.response.data.error ?? 'Error')
        })
    }
  }

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
      <S.Body onSubmit={handleSubmit}>
        <Input
          {...user}
          onChange={(e) =>
            setUser((props) => ({
              ...props,
              value: e.target.value,
              error: false
            }))
          }
          id="singInUser"
          label="Usuário ou email:"
          variant="outlined"
        />
        <Input
          {...password}
          onChange={(e) =>
            setPassword((props) => ({
              ...props,
              value: e.target.value,
              error: false
            }))
          }
          id="singInPassword"
          type="password"
          label="Senha:"
          variant="outlined"
        />

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
