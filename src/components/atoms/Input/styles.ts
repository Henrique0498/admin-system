import { TextField } from '@mui/material'
import { transparentize } from 'polished'

import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import { ColorsType } from 'types/system'
import { InputStylesProps } from './types'

function getColor(error?: boolean, color: ColorsType = 'purple') {
  if (error) {
    return theme.colors.red[400]
  }
  if (color === 'gray') {
    return theme.colors[color][400]
  }

  return theme.colors[color][600]
}

export const Container = styled(TextField)<InputStylesProps>`
  ${({ error, color }) => css`
    & label {
      &.Mui-focused {
        color: ${getColor(error, color)};
      }
    }

    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: ${getColor(error, 'gray')};
      }

      &:hover fieldset {
        border-color: ${getColor(error, color)};
      }

      &.Mui-focused fieldset {
        border-color: ${getColor(error, color)};
      }
    }
  `}

  button.iconInput[type="button"] {
    font-size: 1.25rem;
    padding: 6px 12px;
    color: ${({ theme }) => theme.colors.violet[600]};

    :hover {
      background-color: ${({ theme }) =>
        transparentize(0.95, theme.colors.violet[600])};
    }

    > span * {
      background: ${({ theme }) => theme.colors.violet[600]};
    }
  }
`
