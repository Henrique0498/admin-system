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
    &:focus-within input,
    &:focus-within fieldset,
    :hover input,
    :hover fieldset {
      color: ${getColor(color)};
    }
  `}

  color: ${theme.colors.gray[500]};
  height: 60px;
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;

  fieldset {
    border: 1px solid currentColor;
    border-radius: 4px;
    bottom: 0;
    height: 60px;
    position: absolute;
    width: 100%;
    z-index: -1;
    text-align: start;

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

  input {
    height: 100%;
    background-color: transparent;
    border-radius: 4px;
    height: calc(100% - 10px);
    margin-top: 11px;
    padding: 0 12px;
    flex: 1;
  }

  input.error,
  input.error ~ fieldset {
    color: ${theme.colors.red[500]};
  }

  input.isValid ~ *,
  &:focus-within fieldset {
    legend {
      font-size: 0.875rem;
      margin-left: 5px;
      position: 0;
      padding: 0 4px;
      transform: none;
      width: fit-content;
    }
  }

  &:focus-within fieldset {
    border: 2px solid currentColor;
  }
`

export const InputButtonsAdornment = styled.div`
  margin-top: 10px;
  height: calc(100% - 10px);
  display: flex;
  align-items: center;

  > .input_button {
    margin: 0 0.25rem;
    padding: 0.375rem;
    border-radius: 50%;

    :hover {
      background: ${transparentize(0.9, theme.colors.gray[500])};
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
