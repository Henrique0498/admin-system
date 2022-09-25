import { transparentize } from 'polished'
import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import { ColorsType } from 'types/system'
import { InputStylesProps } from './types'

function getColor(color: ColorsType = 'purple') {
  if (color === 'gray') {
    return theme.colors[color][400]
  }

  return theme.colors[color][600]
}

export const Container = styled.div<InputStylesProps>`
  ${({ color }) => css`
    &:focus-within fieldset,
    :hover fieldset {
      color: ${getColor(color)};
    }
  `}

  height: 3.375rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;

  fieldset {
    color: ${theme.colors.gray[500]};
    border: 0.063rem solid currentColor;
    box-sizing: border-box;
    border-radius: 0.25rem;
    bottom: 0;
    height: 3.375rem;
    position: absolute;
    width: 100%;
    z-index: -1;
    text-align: start;

    legend {
      transition: 200ms ease-in-out;
      transform: translateY(1.188rem) translateX(0.75rem);
      font-size: 1rem;
      font-weight: 400;
      width: 0rem;
      height: 1.313rem;
      padding: 0rem;
      white-space: nowrap;
    }
  }

  input {
    background-color: transparent;
    border-radius: 0.25rem;
    color: currentColor;
    height: calc(100% - 0.875rem);
    flex: 1;
    font-weight: 400;
    margin-top: 0.75rem;
    margin-left: 0.125rem;
    margin-right: 0.125rem;
    padding: 0rem 0.75rem;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      background-clip: text;
      -webkit-background-clip: text;
    }
  }

  input.error,
  input.error ~ fieldset {
    color: ${theme.colors.red[500]};
  }

  input.isValid ~ *,
  &:focus-within fieldset {
    legend {
      font-size: 0.875rem;
      line-height: 1.313rem;
      margin-left: 0.5rem;
      position: 0;
      padding: 0rem 0.25rem;
      transform: none;
      width: fit-content;
    }
  }

  &:focus-within fieldset {
    border: 0.125rem solid currentColor;
  }
`

export const InputButtonsAdornment = styled.div`
  margin-top: 0.625rem;
  height: calc(100% - 0.625rem);
  display: flex;
  align-items: center;

  > .input_button {
    margin: 0rem 0.25rem;
    padding: 0.375rem;
    border-radius: 50%;

    :hover {
      background: ${transparentize(0.9, theme.colors.gray[500])};
    }

    svg {
      color: currentColor;
    }
  }

  .input_button-icon-password {
    > div {
      width: 1.25rem;
      height: 1.25rem;
      position: relative;

      svg {
        position: absolute;
      }

      svg:first-child {
        visibility: visible;
      }

      svg:last-child {
        visibility: hidden;
      }
    }

    &.visibility {
      div {
        svg:first-child {
          visibility: hidden;
        }

        svg:last-child {
          visibility: visible;
        }
      }
    }
  }
`
