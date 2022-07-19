import React, { FormEvent, useRef, useState } from 'react'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import { SiLinkedin } from 'react-icons/si'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

import Input from 'components/atoms/Input'
import ButtonOutline from 'components/atoms/Button/Outline'
import DatePicker from 'components/atoms/DatePicker'
import Select from 'components/atoms/Select'
import useForm from 'hook/useForm'

import * as S from './styles'
import { toast } from 'react-toastify'
import { routerCreateUser } from 'services/routesApi'
import { api } from 'services/config'

const SingUp = () => {
  const username = useForm('username')
  const password = useForm('password')
  const passwordConfirm = useForm('password')
  const email = useForm('email')
  const date = useForm('date')
  const gender = useForm('gender')
  const [pagination, setPagination] = useState(0)
  const ref = useRef<CarouselRef>(null)

  const goTo = (slide: number) => {
    setPagination(1)
    ref?.current?.goTo(slide)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const data = [username, password, passwordConfirm, email, date, gender]

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
      const { body, url } = routerCreateUser(
        username.value,
        password.value,
        email.value,
        date.value,
        gender.value
      )

      await api
        .post(url, body)
        .then(() => toast.success('Usuário criado com sucesso.'))
        .catch((err) => {
          toast.error(err.response.data.error ?? 'Error')
        })
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
              <Input label="E-mail" {...email} />

              <DatePicker label="Data de nascimento" {...date} />

              <Select
                labelId="demo-simple-select-label"
                label="Gênero"
                selects={selects}
                {...gender}
              />
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
