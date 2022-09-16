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

// export const Container = styled(TextField)<InputStylesProps>`
//   ${({ error, color }) => css`
//     & label {
//       &.Mui-focused {
//         color: ${getColor(error, color)};
//       }
//     }

//     & .MuiOutlinedInput-root {
//       & fieldset {
//         border-color: ${getColor(error, 'gray')};
//       }

//       &:hover fieldset {
//         border-color: ${getColor(error, color)};
//       }

//       &.Mui-focused fieldset {
//         border-color: ${getColor(error, color)};
//       }
//     }
//   `}

//   button.iconInput[type="button"] {
//     color: ${({ theme }) => theme.colors.violet[600]};

//     :hover {
//       background-color: ${({ theme }) =>
//         transparentize(0.95, theme.colors.violet[600])};
//     }

//     > span * {
//       background: ${({ theme }) => theme.colors.violet[400]};
//     }

//     &.error {
//       color: ${({ theme }) => theme.colors.red[500]};

//       :hover {
//         background-color: ${({ theme }) =>
//           transparentize(0.95, theme.colors.red[500])};
//       }

//       > span * {
//         background: ${({ theme }) => theme.colors.red[500]};
//       }
//     }
//   }
// `

export const Container = styled.div`
  height: 60px;
  position: relative;
  width: 100%;
  overflow: hidden;

  fieldset {
    border: 1px solid black;
    height: 60px;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 4px;
    z-index: -1;

    legend {
      transition: 200ms ease-in-out;

      transform: translateY(23px) translateX(12px);
      font-size: 1rem;
      width: 0px;
      height: 22px;
      padding: 0;
      white-space: nowrap;
    }
  }
  /*
  fieldset {
    border: 1px solid black;
    height: 60px;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 4px;
    z-index: -1;

    legend {
      transition: 200ms ease-in-out;
      width: 0px;
      height: 22px;
      white-space: nowrap;
    }
  }

  .input_selector:placeholder-shown ~ fieldset {
    background: rgb(0, 0, 0, 0.2);

    legend {
      transform: translateY(23px) translateX(12px);
      font-size: 1rem;
      padding: 0;
    }
  } */

  &:focus-within {
    fieldset {
      border: 2px solid black;
      legend {
        transform: none;
        font-size: 0.875rem;
        margin-left: 5px;
        padding: 0 4px;
        width: fit-content;
      }
    }
  }

  input {
    height: 100%;
    border-radius: 4px;
    background-color: transparent;
    margin-top: 11px;
    height: calc(100% - 10px);
    width: 100%;
    padding: 0 12px;
  }
`
