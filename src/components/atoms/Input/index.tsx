import { InputProps } from './types'

import { ChangeEvent } from 'react'

import * as S from './styles'

const Input = ({ label }: InputProps) => {
  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    e.target.className = changeClassNameFromInput(
      e.target.value,
      e.target.className
    )
    e.target.setAttribute('error', 'true')
  }

  function changeClassNameFromInput(value: string, className: string) {
    if (value === '') {
      className = className.replace('isValid', 'isInvalid')
    } else {
      className = className.replace('isInvalid', 'isValid')
    }

    return className
  }

  return (
    <S.Container>
      <input
        type="text"
        name="teste"
        id="TESTE"
        className="input_selector isInvalid"
        onChange={(e) => onChangeInput(e)}
      />
      <fieldset>
        <legend>{label}</legend>
      </fieldset>
    </S.Container>
  )
}

export default Input
