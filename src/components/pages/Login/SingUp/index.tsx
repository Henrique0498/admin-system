import React, { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { SiLinkedin } from 'react-icons/si'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

import { POST_AUTHENTICATION, POST_CREATE_USER } from 'services/routesApi'
import { createUser } from 'services/login/singUp'
import { authentication } from 'services/login/singIn'
import Input from 'components/atoms/Input'
import ButtonOutline from 'components/atoms/Button/Outline'
import useForm from 'hook/useForm'
import useAuth from 'context/GlobalAuth/useAuth'

import * as S from './styles'
import Checkbox from 'components/atoms/Checkbox'
import ButtonLink from 'components/atoms/Button/Link'
import TermsOfServices from 'components/organisms/TermsOfService'

const SingUp = () => {
  const username = useForm('username')
  const password = useForm('password')
  const email = useForm('email')
  const [termsOfServices, setTermsOfServices] = useState(false)
  const [termsOfServicesModal, setTermsOfServicesModal] = useState(false)
  const auth = useAuth()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const data = [username, password, email]

    if (!data.every((item) => item.validate())) {
      let message = 'Por favor, preencha os campos corretamente.'

      data.map((item) => {
        if (item.error) {
          message = item.error
        }
        return item
      })

      toast.error(message)
    } else if (!termsOfServices) {
      toast.error('É necessário aceitar os termos e serviços.')
    } else {
      const { type, message } = await createUser({
        url: POST_CREATE_USER,
        username: username.value,
        email: email.value,
        password: password.value
      })

      if (type === 'success') {
        await authentication({
          url: POST_AUTHENTICATION,
          username: username.value,
          password: password.value
        })
          .then(({ data }) => {
            toast.success('Redirecionando...')
            auth?.setUser(data)
          })
          .catch((err) =>
            toast.error(err.response.data.err ?? 'Erro desconhecido.')
          )
      }

      toast[type](message)
    }
  }

  return (
    <S.Container>
      <S.Header>
        <h2>Cadastrar</h2>
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
        <S.Pagination>
          <Input label="Usuário" {...username} />

          <Input label="Senha" {...password} type="password" />

          <Input label="E-mail" {...email} />

          <S.Confirm>
            <Checkbox
              checked={termsOfServices}
              onChange={(value) => setTermsOfServices(value)}
            >
              Aceito os termos de contrato.
              <ButtonLink onClick={() => setTermsOfServicesModal(true)}>
                Ler aqui
              </ButtonLink>
            </Checkbox>
            <TermsOfServices
              open={termsOfServicesModal}
              close={setTermsOfServicesModal}
            />
          </S.Confirm>
        </S.Pagination>

        <ButtonOutline size="large" color="violet" type="submit">
          Cadastrar
        </ButtonOutline>
      </S.Body>
    </S.Container>
  )
}

export default SingUp
