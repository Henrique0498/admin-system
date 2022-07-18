import { TextField } from '@mui/material'

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
  ${({ error, colorCustom }) => css`
    & label {
      &.Mui-focused {
        color: ${getColor(error, colorCustom)};
      }
    }

    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: ${getColor(error, 'gray')};
      }

      &:hover fieldset {
        border-color: ${getColor(error, colorCustom)};
      }

      &.Mui-focused fieldset {
        border-color: ${getColor(error, colorCustom)};
      }
    }
  `}
`
