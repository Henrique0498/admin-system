import { FormControl, Select as SelectMui } from '@mui/material'
import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import { ColorsType } from 'types/system'
import { SelectStyleType } from './types'

function getColor(error?: boolean, color: ColorsType = 'purple') {
  if (error) {
    return theme.colors.red[400]
  }
  if (color === 'gray') {
    return theme.colors[color][400]
  }

  return theme.colors[color][600]
}

export const Container = styled(FormControl)<SelectStyleType>`
  ${({ error, colors }) => css`
    & label {
      &.Mui-focused {
        color: ${getColor(error, colors)};
      }
    }

    & .MuiOutlinedInput-root {
      & fieldset {
        border-color: ${getColor(error, 'gray')};
      }

      &:hover fieldset {
        border-color: ${getColor(error, colors)};
      }

      &.Mui-focused fieldset {
        border-color: ${getColor(error, colors)};
      }
    }
  `}
`

export const Select = styled(SelectMui)``
