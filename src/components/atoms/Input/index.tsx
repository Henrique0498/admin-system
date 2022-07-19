import { InputProps } from './types'

import * as S from './styles'
import { useState } from 'react'
import { Button, InputAdornment } from '@mui/material'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

const Input = ({
  validate,
  error,
  variant = 'outlined',
  color,
  type = 'text',
  label,
  onChange
}: InputProps) => {
  const [typeModified, setTypeModified] = useState(type)

  function handleVisible() {
    setTypeModified(typeModified === 'text' ? 'password' : 'text')
  }

  function renderEndAdornment() {
    if (type === 'password') {
      return (
        <InputAdornment position="end">
          {type === 'password' && (
            <Button
              variant="text"
              className="iconInput"
              onClick={() => handleVisible()}
            >
              {typeModified === 'password' ? (
                <MdOutlineVisibility />
              ) : (
                <MdOutlineVisibilityOff />
              )}
            </Button>
          )}
        </InputAdornment>
      )
    }

    return null
  }

  return (
    <S.Container
      onBlur={validate}
      type={typeModified}
      variant={variant}
      label={label}
      color={color}
      onChange={onChange}
      error={error ? true : false}
      InputProps={{
        endAdornment: renderEndAdornment()
      }}
    />
  )
}

export default Input
