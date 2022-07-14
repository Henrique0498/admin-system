import type { DatePickerProps as IDatePickerProps } from 'antd'
import { Dispatch, SetStateAction } from 'react'

import * as S from './styles'

interface DatePickerProps {
  label: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const DatePicker = ({ setValue, value, label }: DatePickerProps) => {
  const onChange = (value: IDatePickerProps['value']) => {
    setValue(value?.format() ?? '')
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
