import React, { FormEvent, useRef, useState } from 'react'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import { SiLinkedin } from 'react-icons/si'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

import Input from 'components/atoms/Input'
import ButtonOutline from 'components/atoms/Button/Outline'
import DatePicker from 'components/atoms/DatePicker'

import * as S from './styles'
import Select from 'components/atoms/Select'

type InputType = {
  error?: boolean
  value: string
}

const SingUp = () => {
  const [username, setUsername] = useState<InputType>({ value: '' })
  const [password, setPassword] = useState<InputType>({ value: '' })
  const [passwordConfirm, setPasswordConfirm] = useState<InputType>({
    value: ''
  })
  const [email, setEmail] = useState<InputType>({ value: '' })
  const [date, setDate] = useState<InputType>({ value: '' })
  const [gender, setGender] = useState<InputType>({ value: '' })
  const [pagination, setPagination] = useState(0)
  const ref = useRef<CarouselRef>(null)

  const goTo = (slide: number) => {
    setPagination(1)
    ref?.current?.goTo(slide)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
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
              <Input
                label="Usuário"
                variant="outlined"
                onChange={(e) =>
                  setUsername((props) => ({
                    ...props,
                    value: e.target.value,
                    error: false
                  }))
                }
                {...username}
              />

              <Input
                label="Senha"
                variant="outlined"
                onChange={(e) =>
                  setPassword((props) => ({
                    ...props,
                    value: e.target.value,
                    error: false
                  }))
                }
                {...password}
              />

              <Input
                label="Confirmar Senha"
                variant="outlined"
                onChange={(e) =>
                  setPasswordConfirm((props) => ({
                    ...props,
                    value: e.target.value,
                    error: false
                  }))
                }
                {...passwordConfirm}
              />
            </S.Pagination>
          </div>

          <div>
            <S.Pagination>
              <Input
                label="E-mail"
                variant="outlined"
                onChange={(e) =>
                  setEmail((props) => ({
                    ...props,
                    value: e.target.value,
                    error: false
                  }))
                }
                {...email}
              />

              <DatePicker
                setValue={setDate}
                label="Data de nascimento"
                {...date}
              />

              <Select
                labelId="demo-simple-select-label"
                label="Gênero"
                setValue={(e) =>
                  setGender((props) => ({
                    ...props,
                    value: e.target.value,
                    error: false
                  }))
                }
                selects={selects}
                {...gender}
              />
            </S.Pagination>
          </div>
        </Carousel>

        <div className="containerButton">
          {pagination === 0 ? (
            <ButtonOutline size="large" color="violet" onClick={() => goTo(1)}>
              Próximo
            </ButtonOutline>
          ) : (
            <ButtonOutline size="large" color="violet">
              Cadastrar
            </ButtonOutline>
          )}
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
