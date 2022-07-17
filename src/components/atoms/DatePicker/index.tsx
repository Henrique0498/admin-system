import type { DatePickerProps as IDatePickerProps } from 'antd'

import * as S from './styles'

interface DatePickerProps {
  label: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<InputType>>
}

type InputType = {
  error?: boolean
  value: string
}

const DatePicker = ({ setValue, value, label }: DatePickerProps) => {
  const onChange = (value: IDatePickerProps['value']) => {
    setValue((props) => ({
      ...props,
      value: value?.format() ?? '',
      error: false
    }))
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
