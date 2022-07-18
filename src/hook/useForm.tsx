import { FormEvent, useState } from 'react'

const typesValidate = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido.'
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize somente números.'
  },
  text: {
    regex: /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
    message: 'Somente letras são permitidas.'
  },
  password: {
    regex: /^(?=.*[a-z])[0-9a-zA-Z$*&@#!%()\-\\+.\\/\\]{8,}$/i,
    message: 'A senha precisa ter pelo menos 8 caracteres.'
  },
  username: {
    regex: /^[a-záàâãéèêíïóôõöúçñ_\d]+$/i,
    message: 'Usuário invalido.'
  },
  gender: {
    regex: /(?:[m]|(?:[f])|(?:[s])){1,1}/,
    message: ''
  }
}

function useForm(valid?: keyof typeof typesValidate, isRequired?: boolean) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function validate(value: string) {
    if (isRequired || isRequired === undefined) {
      if (value.length === 0) {
        setError('Campo obrigatório.')
        return false
      } else if (valid && !typesValidate[valid].regex.test(value)) {
        setError(typesValidate[valid].message)
        return false
      } else {
        setError('')
        return true
      }
    } else {
      return true
    }
  }

  function onChange({ currentTarget }: FormEvent<HTMLInputElement>) {
    console.log(currentTarget.value)

    if (error) {
      validate(currentTarget.value)
    }

    setValue(currentTarget.value)
  }

  return {
    error,
    setError,
    value,
    setValue,
    onChange,
    validate: () => validate(value)
  }
}

export default useForm
