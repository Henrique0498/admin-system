/* eslint-disable no-useless-escape */
import { ChangeEvent, useCallback, useRef } from 'react'
import * as mask from './masks'

import * as valid from './validation'

type TypeConfigRegiste = {
  isRequired?: boolean
  mask?: keyof typeof masks
  typeValidation?: TypeKeysValidation
}

type TypeKeysValidation = keyof typeof validData

type TypeReturnGetValue = {
  value: string
  error: boolean
  message: string
}

const masks = {
  cep: mask.maskCep
}

const validData = {
  cep: valid.validateCep,
  email: valid.validateEmail
}

interface TypeData extends TypeConfigRegiste {
  id: string
  value: string
  error: boolean
  validate: () => boolean
  element: null | HTMLInputElement
  message: string
}

function useForm() {
  const data = useRef<{ [key: string]: TypeData }>({})

  //validação por tipo
  const validateFromType = useCallback(
    (type: TypeKeysValidation, value: string) => {
      return validData[type](value)
    },
    []
  )

  //validação individual de cada registro feito
  const validate = useCallback(
    (data: TypeData) => {
      if (data.value === '' && data.isRequired) {
        console.log(data)
        return {
          error: true,
          message: 'Campo Obrigatório'
        }
      } else if (
        data.typeValidation &&
        !validateFromType(data.typeValidation, data.value)
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

  //testa todos os elementos
  const validationAll = useCallback(() => {
    const keyOfsData = Object.keys(data.current)

    return keyOfsData.every((key) => validate(data.current[key]).error)
  }, [validate])

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
      inputPropsCurrent.isRequired && validateRequired(target)

      data.current[target.id] = {
        ...inputPropsCurrent,
        element: target,
        value: target.value
      }
    },
    [validateRequired, applyMask]
  )

  //retorna todos os valores
  const getValue = useCallback(() => {
    const keysData = Object.keys(data.current)
    const resultDataModified: { [key: string]: TypeReturnGetValue } = {}

    keysData.map((key) => {
      const inputPropsCurrent = data.current[key]

      resultDataModified[key] = {
        value: inputPropsCurrent.value,
        error: inputPropsCurrent.error,
        message: inputPropsCurrent.message
      }

      return null
    })

    return resultDataModified
  }, [])

  //registra o input
  const register = useCallback(
    (id: string, config: TypeConfigRegiste = {}) => {
      data.current[id] = {
        ...config,
        validate: () => true,
        id: id,
        error: false,
        value: '',
        message: '',
        element: null
      }

      return {
        id: id,
        uOnChange: onChange,
        uOnBlur: onBlur
      }
    },
    [onChange, onBlur]
  )

  return { register, getValue, validationAll }
}

export default useForm
