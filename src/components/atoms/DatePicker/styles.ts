import { DatePicker } from 'antd'
import styled, { css } from 'styled-components'

interface Props {
  active: boolean
  label: string
}

export const Container = styled(DatePicker)<Props>`
  ${({ label }) => css`
    ::after {
      content: '${label}';
      font-size: 1rem;
      position: absolute;
      transition: all ${({ theme }) => theme.animation.duration.fast}
        ease-in-out;
      font-weight: 400;
      background-color: ${({ theme }) => theme.colors.gray[50]};
      color: ${({ theme }) => theme.colors.gray[500]};
      padding: 0 4px;
      left: 0.66rem;
    }
  `}

  height: 56px;
  border: none;
  background: transparent;
  padding: 4px 14px;
  position: relative;

  ::before {
    content: '';
    border-radius: 4px;
    position: absolute;
    border: 1px solid ${({ theme }) => theme.colors.gray[400]};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  :hover {
    ::before {
      border-color: ${({ theme }) => theme.colors.purple[600]};
    }
  }

  :focus-within {
    box-shadow: none;

    ::after {
      color: ${({ theme }) => theme.colors.purple[700]};
      font-size: 0.75rem;
      transform: translateY(-28px);
    }

    ::before {
      border: 2px solid ${({ theme }) => theme.colors.purple[600]};
    }
  }

  input {
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  span {
    display: none;
  }

  ${({ active }) => {
    if (active) {
      return css`
        ::after {
          transform: translateY(-28px);
          font-size: 0.75rem;
        }
      `
    }
  }}
`
