import React, { FormEvent, useRef, useState } from 'react'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import { toast } from 'react-toastify'
import { SiLinkedin } from 'react-icons/si'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

import { POST_CREATE_USER } from 'services/routesApi'
import { createUser } from 'services/login/singUp'
import Input from 'components/atoms/Input'
import ButtonOutline from 'components/atoms/Button/Outline'
import DatePicker from 'components/atoms/DatePicker'
import Select from 'components/atoms/Select'
import useForm from 'hook/useForm'

import * as S from './styles'
import Checkbox from 'components/atoms/Checkbox'
import ButtonLink from 'components/atoms/Button/Link'

const SingUp = () => {
  const username = useForm('username')
  const name = useForm('text')
  const password = useForm('password')
  const passwordConfirm = useForm('password')
  const email = useForm('email')
  const birthDate = useForm('date')
  const gender = useForm('gender')
  const [pagination, setPagination] = useState(0)
  const ref = useRef<CarouselRef>(null)

  const goTo = (slide: number) => {
    setPagination(1)
    ref?.current?.goTo(slide)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const data = [username, password, passwordConfirm, email, birthDate, gender]

    if (!data.every((item) => item.validate())) {
      let message = ''

      data.map((item) => {
        if (item.error) {
          message = item.error
        }
        return item
      })

      toast.error(message ?? 'Por favor, preencha os campos corretamente.')
    } else if (password.value !== passwordConfirm.value) {
      toast.error('As senhas informadas estão incorretas.')
    } else {
      const { type, message } = await createUser({
        url: POST_CREATE_USER,
        name: '',
        username: username.value,
        email: email.value,
        gender: gender.value,
        passwordConfirm: passwordConfirm.value,
        password: password.value,
        birthDate: birthDate.value
      })

      toast[type](message)
    }
  }

  return (
    <S.Container>
      <S.Header>
        <h2>Cadastre-se</h2>
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

              <S.Confirm>
                <Checkbox>
                  Aceito os termos de contrato.<ButtonLink>Ler aqui</ButtonLink>
                </Checkbox>
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
