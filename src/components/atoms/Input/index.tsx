import { InputProps } from './types'

import * as S from './styles'
import { useRef, useState } from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

const Input = ({
  validate,
  error,
  variant = 'outlined',
  color,
  type = 'text',
  value,
  label,
  onChange
}: InputProps) => {
  const [typeModified, setTypeModified] = useState(type)

  const ref = useRef<HTMLInputElement>(null)

  function handleVisible() {
    setTypeModified(typeModified === 'text' ? 'password' : 'text')
  }

  function renderEndAdornment() {
    if (type === 'password') {
      return (
        <InputAdornment position="end">
          {type === 'password' && (
            <IconButton
              className={`iconInput ${error ? 'error' : ''}`}
              onClick={() => handleVisible()}
            >
              {typeModified === 'password' ? (
                <MdOutlineVisibility />
              ) : (
                <MdOutlineVisibilityOff />
              )}
            </IconButton>
          )}
        </InputAdornment>
      )
    }

    return null
  }

  // return (
  //   <S.Container
  //     onBlur={validate}
  //     type={typeModified}
  //     variant={variant}
  //     label={label}
  //     color={color}
  //     value={value}
  //     onChange={onChange}
  //     error={error ? true : false}
  //     InputProps={{
  //       endAdornment: renderEndAdornment()
  //     }}
  //   />
  // )

  console.log(ref.current?.value)

  return (
    <S.Container>
      <input
        type="text"
        name="teste"
        id="TESTE"
        ref={ref}
        placeholder=" "
        className="input_selector"
      />
      <fieldset>
        <legend>teste teste</legend>
      </fieldset>
    </S.Container>
  )
}

export default Input
