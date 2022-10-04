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

type TypeSetProps = {
  element: HTMLInputElement
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

  //seta as novas propriedades de validação
  const setPropsValidation = useCallback(
    ({ element, error, message }: TypeSetProps) => {
      const inputPropsCurrent = data.current[element.id]

      if (error && !element.className.includes(' error')) {
        inputPropsCurrent.error = true
        inputPropsCurrent.message = message
        element.className += ' error'
      } else if (!error) {
        inputPropsCurrent.error = false
        inputPropsCurrent.message = ''
        element.className = element.className.replace(' error', '')
      }
    },
    []
  )

  //testa todos os elementos
  const validationAll = useCallback(() => {
    const keyOfsData = Object.keys(data.current)
    let isExistError = false

    keyOfsData.map((key) => {
      const isValid = validate(data.current[key])
      const element =
        data.current[key].element ??
        (document.getElementById(data.current[key].id) as HTMLInputElement)

      if (element) {
        setPropsValidation({
          element,
          ...isValid
        })
      }

      if (isValid.error) {
        isExistError = true
      }

      return null
    })

    return isExistError
  }, [setPropsValidation, validate])

  //função executada quando o usuário tira o focus do input
  const onBlur = useCallback(
    (element: ChangeEvent<HTMLInputElement>) => {
      const { target } = element
      const inputPropsCurrent = data.current[target.id]
      const isValid = validate(inputPropsCurrent)

      setPropsValidation({
        element: target,
        ...isValid
      })
    },
    [setPropsValidation, validate]
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

      if (inputPropsCurrent.isRequired) {
        setPropsValidation({
          element: target,
          error: target.value === '',
          message: 'Campo obrigatório.'
        })
      }

      data.current[target.id] = {
        ...inputPropsCurrent,
        element: target,
        value: target.value
      }
    },
    [applyMask, setPropsValidation]
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
