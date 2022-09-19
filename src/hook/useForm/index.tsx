/* eslint-disable no-useless-escape */
import { ChangeEvent, useCallback, useRef } from 'react'
import * as mask from './masks'

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

const masks = {
  cep: mask.maskCep
}

type TypeConfigRegiste = {
  type?: 'text' | 'password'
  isRequired?: boolean
  mask?: keyof typeof masks
}

interface TypeData extends TypeConfigRegiste {
  type: 'text' | 'password'
  typeValidation?: 'cep' | 'email'
  id: string
  value: string
  error: boolean
  validate: () => boolean
  element: null | HTMLInputElement
  message: string
}

function useForm() {
  console.log(typesValidate)
  const data = useRef<{ [key: string]: TypeData }>({})

  const validateFromType = useCallback((type: string, value: string) => {
    console.log(type, value)

    return false
  }, [])

  const validate = useCallback(
    (data: TypeData) => {
      if (data.value === '') {
        return {
          error: true,
          message: 'Campo Obrigatório'
        }
      } else if (
        data.typeValidation &&
        validateFromType(data.typeValidation, data.value)
      ) {
        return {
          error: true,
          message: 'O campo informado está incorreto'
        }
      }

      return {
        error: false,
        message: ''
      }
    },
    [validateFromType]
  )

  //função executada quando o usuário tira o focus do input
  const onBlur = useCallback(
    (element: ChangeEvent<HTMLInputElement>) => {
      const { target } = element
      const inputPropsCurrent = data.current[target.id]

      const { error, message } = validate(inputPropsCurrent)

      if (error) {
        inputPropsCurrent.error = true
        inputPropsCurrent.message = message
        target.className = target.className + ' error'
      } else {
        inputPropsCurrent.error = false
        inputPropsCurrent.message = ''
        target.className = target.className.replace(' error', '')
      }
    },
    [validate]
  )

  //função pra validar se o campo está preenchido
  const validateRequired = useCallback((element: HTMLInputElement) => {
    const inputPropsCurrent = data.current[element.id]

    if (element.value === '') {
      inputPropsCurrent.error = true
      inputPropsCurrent.message = 'Campo obrigatório'
      element.className = element.className + ' error'
    } else {
      inputPropsCurrent.error = false
      inputPropsCurrent.message = ''
      element.className = element.className.replace(' error', '')
    }
  }, [])

  //função pra aplicar mascara
  const applyMask = useCallback((element: HTMLInputElement) => {
    const inputPropsCurrent = data.current[element.id]

    if (inputPropsCurrent?.mask) {
      inputPropsCurrent.value = masks[inputPropsCurrent.mask](
        element.value,
        inputPropsCurrent.value
      )
      element.value = masks[inputPropsCurrent.mask](
        element.value,
        inputPropsCurrent.value
      )
    }
  }, [])

  //função pra executar uma ação a cada letra digitada
  const onChange = useCallback(
    (elementEvent: ChangeEvent<HTMLInputElement>) => {
      const { target } = elementEvent
      const inputPropsCurrent = data.current[target.id]

      inputPropsCurrent?.mask && applyMask(target)

      console.log(target.value)

      inputPropsCurrent.isRequired && validateRequired(target)

      data.current[target.id] = {
        ...inputPropsCurrent,
        element: target,
        value: target.value
      }
    },
    [validateRequired, applyMask]
  )

  //registra o input
  const register = useCallback(
    (id: string, config: TypeConfigRegiste = {}) => {
      data.current[id] = {
        ...config,
        type: config.type ?? 'text',
        validate: () => true,
        id: id,
        error: false,
        value: '',
        message: '',
        element: null
      }

      return {
        id: id,
        onChange,
        onBlur
      }
    },
    [onChange, onBlur]
  )

  return { register, getValue: data }
}

export default useForm
