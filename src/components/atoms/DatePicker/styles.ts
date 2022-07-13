import { DatePicker } from 'antd'
import styled from 'styled-components'

export const Container = styled(DatePicker)`
  height: 56px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray[400]};
  background: transparent;
  padding: 4px 14px;

  :hover {
    border-color: ${({ theme }) => theme.colors.purple[500]};
  }

  :focus-within {
    border: 2px solid ${({ theme }) => theme.colors.purple[500]};
    box-shadow: none;
  }

  input {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  span {
    display: none;
  }
`
