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

export const Container = styled.div<InputStylesProps>`
  ${({ color, error }) => css`
    &:focus-within,
    :hover {
      color: ${getColor(error, color)};
    }
  `}

  color: ${theme.colors.gray[500]};
  height: 60px;
  overflow: hidden;
  position: relative;
  width: 100%;

  input.isInvalid ~ *,
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
    width: 100%;
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

    legend {
    }
  }
`
