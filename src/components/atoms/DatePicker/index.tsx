import type { DatePickerProps } from 'antd'
import { DatePicker as AntdDatePicker, Space } from 'antd'

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString)
}

const DatePicker = () => {
  return (
    <Space direction="vertical">
      <AntdDatePicker onChange={onChange} />
    </Space>
  )
}

export default DatePicker
