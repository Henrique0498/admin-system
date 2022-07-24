import { SiLinkedin } from 'react-icons/si'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import { FormEvent } from 'react'
import { toast } from 'react-toastify'

import { authentication } from 'services/login/singIn'
import { POST_AUTHENTICATION } from 'services/routesApi'
import ButtonOutline from 'components/atoms/Button/Outline'
import Input from 'components/atoms/Input'
import useForm from 'hook/useForm'
import useAuth from 'context/GlobalAuth/useAuth'

import * as S from './styles'

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
      await authentication({
        url: POST_AUTHENTICATION,
        username: user.value,
        password: password.value
      })
        .then(({ data }) => auth?.setUser(data))
        .catch((err) => {
          toast.error(err.response.data.error ?? 'Erro desconhecido')
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
