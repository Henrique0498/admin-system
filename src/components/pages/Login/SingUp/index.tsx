import React, { FormEvent, useRef, useState } from 'react'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import { toast } from 'react-toastify'
import { SiLinkedin } from 'react-icons/si'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

import { POST_AUTHENTICATION, POST_CREATE_USER } from 'services/routesApi'
import { createUser } from 'services/login/singUp'
import Input from 'components/atoms/Input'
import ButtonOutline from 'components/atoms/Button/Outline'
import DatePicker from 'components/atoms/DatePicker'
import Select from 'components/atoms/Select'
import useForm from 'hook/useForm'

import * as S from './styles'
import Checkbox from 'components/atoms/Checkbox'
import ButtonLink from 'components/atoms/Button/Link'
import TermsOfServices from 'components/organisms/TermsOfService'
import { authentication } from 'services/login/singIn'
import useAuth from 'context/GlobalAuth/useAuth'

const SingUp = () => {
  const username = useForm('username')
  const name = useForm('text')
  const password = useForm('password')
  const passwordConfirm = useForm('password')
  const email = useForm('email')
  const numberPhone = useForm('numberPhone')
  const birthDate = useForm('date')
  const gender = useForm('gender')
  const [termsOfServices, setTermsOfServices] = useState(false)
  const [termsOfServicesModal, setTermsOfServicesModal] = useState(false)
  const [pagination, setPagination] = useState(0)
  const ref = useRef<CarouselRef>(null)
  const auth = useAuth()

  const goTo = (slide: number) => {
    setPagination(1)
    ref?.current?.goTo(slide)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const data = [username, password, passwordConfirm, email, birthDate, gender]

    if (!data.every((item) => item.validate())) {
      let message = 'Por favor, preencha os campos corretamente.'

      data.map((item) => {
        if (item.error) {
          message = item.error
        }
        return item
      })

      toast.error(message)
    } else if (password.value !== passwordConfirm.value) {
      toast.error('As senhas informadas estão incorretas.')
    } else if (!termsOfServices) {
      toast.error('É necessário aceitar os termos e serviços.')
    } else {
      const { type, message } = await createUser({
        url: POST_CREATE_USER,
        name: name.value,
        username: username.value,
        email: email.value,
        gender: gender.value,
        passwordConfirm: passwordConfirm.value,
        password: password.value,
        birthDate: birthDate.value
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
        <Carousel dotPosition="left" ref={ref}>
          <div>
            <S.Pagination>
              <Input label="Usuário" {...username} />

              <Input label="Senha" {...password} type="password" />

              <Input
                label="Confirmar Senha"
                {...passwordConfirm}
                type="password"
              />
            </S.Pagination>
          </div>

          <div>
            <S.Pagination>
              <Input label="Nome" {...name} />

              <Input label="E-mail" {...email} />

              <DatePicker label="Data de nascimento" {...birthDate} />
            </S.Pagination>
          </div>

          <div>
            <S.Pagination>
              <Select
                labelId="demo-simple-select-label"
                label="Gênero"
                selects={selects}
                {...gender}
              />

              <Input label="Telefone (opcional)" {...numberPhone} />

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
          </div>
        </Carousel>

        <div className={`containerButton ${pagination === 0 ? 'one' : ''}`}>
          <ButtonOutline
            size="large"
            color="violet"
            onClick={() => goTo(1)}
            type="button"
          >
            Próximo
          </ButtonOutline>
          <ButtonOutline size="large" color="violet" type="submit">
            Cadastrar
          </ButtonOutline>
        </div>
      </S.Body>
    </S.Container>
  )
}

export default SingUp

const selects = [
  {
    value: 'm',
    children: 'Homem'
  },
  {
    value: 'f',
    children: 'Mulher'
  },
  {
    value: 's',
    children: 'Prefiro não dizer'
  }
]
