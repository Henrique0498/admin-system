/* eslint-disable no-useless-escape */
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
    message: 'O gênero informado está incorreto.'
  },
  date: {
    regex: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    message: 'A data informada está incorreta.'
  },
  numberPhone: {
    regex: /(\(\d{2}\)\s)(\d{4,5}\-\d{4})/,
    message: 'Numero de telefone está incorreto.'
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

  function mask(value: string) {
    let result = value

    if (valid === 'numberPhone') {
      const valueClean = value
        .replace('(', '')
        .replace(')', '')
        .replace(' ', '')
        .replace('-', '')

      if (valueClean.length <= 2) {
        if (valueClean) {
          result = `(${valueClean}`
        }
      } else if (valueClean.length <= 7) {
        const valueModified = `(${valueClean.slice(0, 2)}) ${valueClean.slice(
          2,
          7
        )}`

        result = valueModified
      } else {
        const valueModified = `(${valueClean.slice(0, 2)}) ${valueClean.slice(
          2,
          7
        )}-${valueClean.slice(7, 11)}`

        result = valueModified
      }
    }

    return result
  }

  function onChange({ currentTarget }: FormEvent<HTMLInputElement>) {
    const valueModified = mask(currentTarget.value)

    console.log(valueModified)

    if (error) {
      validate(valueModified)
    }

    setValue(valueModified)
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
