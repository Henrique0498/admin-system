import type { DatePickerProps } from 'antd'

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString)
}

import * as S from './styles'

const DatePicker = () => {
  return <S.Container onChange={onChange} />
}

export default DatePicker
