import type { DatePickerProps } from 'antd'
import { useState } from 'react'

import * as S from './styles'

const DatePicker = () => {
  const [state, setState] = useState('')

  const onChange = (value: DatePickerProps['value']) => {
    setState(value?.format() ?? '')
  }

  return (
    <S.Container
      onChange={onChange}
      placeholder=""
      label="Data"
      active={state !== ''}
      format="DD/MM/YYYY"
    />
  )
}

export default DatePicker
