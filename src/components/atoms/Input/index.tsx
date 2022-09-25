import { FocusEvent, useRef, MouseEvent } from 'react'

import { InputProps } from './types'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

import * as S from './styles'

const Input = ({
  label,
  color,
  classNameContainer,
  adornments,
  onChange,
  onBlur,
  uOnChange,
  uOnBlur,
  type = 'text',
  ...props
}: InputProps) => {
  const refContainer = useRef<HTMLInputElement>(null)
  const data = useRef({ type: type })

  function handleOnChange(elementEvent: FocusEvent<HTMLInputElement>) {
    elementEvent.target.className = changeClassNameFromInput(
      elementEvent.target.value,
      elementEvent.target.className
    )
    onChange && onChange(elementEvent)
    uOnChange && uOnChange(elementEvent)
  }

  function handleOnBlur(elementEvent: FocusEvent<HTMLInputElement>) {
    onBlur && onBlur(elementEvent)
    uOnBlur && uOnBlur(elementEvent)
  }

  function changeClassNameFromInput(value: string, className: string) {
    if (value === '') {
      className = className.replace(' isValid', '')
    } else {
      className = className + ' isValid'
    }

    return className
  }

  function handleToggleTypeInput(element: MouseEvent<HTMLButtonElement>) {
    const { currentTarget } = element

    if (refContainer.current) {
      if (data.current.type === 'password') {
        refContainer.current.children[0].setAttribute('type', 'text')
        data.current.type = 'text'
        currentTarget.className += ' visibility'
      } else {
        refContainer.current.children[0].setAttribute('type', 'password')
        data.current.type = 'password'
        currentTarget.className = currentTarget.className.replace(
          ' visibility',
          ''
        )
      }
    }
  }

  function renderButton() {
    return (
      <>
        {adornments?.map((adornment, i) => (
          <button
            key={`key_input_button-adornment-${adornment.title}-${i}`}
            onClick={adornment.function}
            title={adornment.title}
            type="button"
          >
            {adornment.children}
          </button>
        ))}

        {type === 'password' && (
          <button
            onClick={handleToggleTypeInput}
            type="button"
            className="input_button input_button-icon-password"
          >
            <div>
              <EyeIcon />
              <EyeSlashIcon />
            </div>
          </button>
        )}
      </>
    )
  }

  return (
    <S.Container
      className={classNameContainer}
      color={color}
      ref={refContainer}
    >
      <input
        {...props}
        type={data.current.type}
        className={`input_selector ${props.className ?? ''} isInvalid`}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
      />
      <S.InputButtonsAdornment>{renderButton()}</S.InputButtonsAdornment>
      <fieldset>
        <legend>{label}</legend>
      </fieldset>
    </S.Container>
  )
}

export default Input
