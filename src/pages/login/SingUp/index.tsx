import ButtonOutline from 'components/atoms/Button/Outline'
import Input from 'components/atoms/Input'
import * as S from './styles'
import { SiLinkedin } from 'react-icons/si'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import { useState } from 'react'
import DatePicker from 'components/atoms/DatePicker'

const SingUp = () => {
  const [date, setDate] = useState('')
  const [pagination, setPagination] = useState('')

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
      <S.Body>
        {pagination === '' ? (
          <S.Pagination>
            <Input id="singUPUser" label="Usuário" variant="outlined" />

            <Input id="singUPEmail" label="Senha" variant="outlined" />

            <Input id="singUPPass" label="Confirmar Senha" variant="outlined" />
          </S.Pagination>
        ) : (
          <S.Pagination>
            <Input id="singUPUser" label="E-mail" variant="outlined" />

            <DatePicker
              value={date}
              setValue={setDate}
              label="Data de nascimento"
            />

            <Input id="singUPPass" label="Sexo" variant="outlined" />
          </S.Pagination>
        )}
        <div className="containerButton">
          {pagination === '' ? (
            <ButtonOutline
              size="large"
              color="violet"
              onClick={() => setPagination('finish')}
            >
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
