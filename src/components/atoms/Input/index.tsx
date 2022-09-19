import { InputProps } from './types'

import { ChangeEvent } from 'react'

import * as S from './styles'

const Input = ({ label, id, onChange, onBlur }: InputProps) => {
  function handleOnChange(elementEvent: ChangeEvent<HTMLInputElement>) {
    elementEvent.target.className = changeClassNameFromInput(
      elementEvent.target.value,
      elementEvent.target.className
    )
    // e.target.setAttribute('error', 'true')

    onChange && onChange(elementEvent)
  }
  function handleOnBlur(elementEvent: ChangeEvent<HTMLInputElement>) {
    onBlur && onBlur(elementEvent)
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
        id={id}
        className="input_selector isInvalid"
        onBlur={handleOnBlur}
        onChange={handleOnChange}
      />
      <fieldset>
        <legend>{label}</legend>
      </fieldset>
    </S.Container>
  )
}

export default Input
