import ButtonOutline from 'components/atoms/Button/Outline'
import Input from 'components/atoms/Input'
import { SiLinkedin } from 'react-icons/si'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import { FormEvent } from 'react'
import { api } from 'services/config'

import * as S from './styles'
import { toast } from 'react-toastify'
import useAuth from 'context/GlobalAuth/useAuth'
import { routerAuthentication } from 'services/routesApi'
import useForm from 'hook/useForm'

type RequestType = {
  username: string
  name: string
  token: string
  photo: string
}

const SingIn = () => {
  const user = useForm('username')
  const password = useForm('password')
  const auth = useAuth()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = [user, password]

    if (!data.every((item) => item.validate())) {
      let message = 'Por favor, preencha os campos corretamente.'

      data.map((item) => {
        if (item.error) {
          message = item.error
        }
        return item
      })

      toast.error(message)
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
        <Input label="Usuário ou email:" {...user} />
        <Input type="password" label="Senha:" {...password} />

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
