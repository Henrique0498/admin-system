import type { DatePickerProps as IDatePickerProps } from 'antd'
import { Dispatch, FormEvent, SetStateAction } from 'react'

import * as S from './styles'

interface DatePickerProps {
  label: string
  error: string
  onChange: ({ currentTarget }: FormEvent<HTMLInputElement>) => void
  setError: Dispatch<SetStateAction<string>>
  setValue: Dispatch<SetStateAction<string>>
  value: string
  validate: () => boolean
  variant?: 'outlined'
}

const DatePicker = ({ value, label, validate, setValue }: DatePickerProps) => {
  const onChange = (value: IDatePickerProps['value']) => {
    setValue(value?.format().split('T')[0] ?? '')
    validate()
  }

  return (
    <S.Container
      onChange={onChange}
      placeholder=""
      label={label}
      active={value !== ''}
      format="DD/MM/YYYY"
    />
  )
}

export default DatePicker
