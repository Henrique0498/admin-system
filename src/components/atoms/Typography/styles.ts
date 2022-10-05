import styled, { css } from 'styled-components'
import { TypeStyledTypography, TypeTypographyElement } from './types'

const translateElement = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle: 'p',
  body: 'p',
  'body-bold': 'p',
  'body-sm': 'p',
  'body-xs': 'p',
  'body-xxs': 'p',
  function_text: 'span',
  'function_text-sm': 'span',
  'function_text-lg': 'span'
}

export function getStylesTypography(type: TypeTypographyElement) {
  switch (type) {
    case 'h1':
      return css`
        font-size: 4rem;
        line-height: 5rem;
        font-family: 'Poppins, Roboto', sans-serif;
        font-weight: 500;
      `
    case 'h2':
      return css`
        font-size: 3rem;
        line-height: 3.75rem;
        font-family: 'Poppins, Roboto', sans-serif;
        font-weight: 500;
      `
    case 'h3':
      return css`
        font-size: 2.125rem;
        line-height: 2.625rem;
        font-family: 'Poppins, Roboto', sans-serif;
        font-weight: 500;
      `
    case 'h4':
      return css`
        font-size: 1.5rem;
        line-height: 2.875rem;
        font-family: 'Poppins, Roboto', sans-serif;
        font-weight: 500;
      `
    case 'h5':
      return css`
        font-size: 1.25rem;
        line-height: 1.625rem;
        font-family: 'Poppins, Roboto', sans-serif;
        font-weight: 500;
      `
    case 'h6':
      return css`
        font-size: 1rem;
        line-height: 1.25rem;
        font-family: 'Poppins, Roboto', sans-serif;
        font-weight: 500;
      `
    case 'subtitle':
      return css`
        font-size: 0.875rem;
        line-height: 1.063rem;
        font-family: 'Poppins, Roboto', sans-serif;
        font-weight: 500;
      `
    case 'function_text':
      return css`
        font-size: 1rem;
        line-height: 1.25rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
      `
    case 'function_text-sm':
      return css`
        font-size: 0.875rem;
        line-height: 1.313rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
      `
    case 'function_text-lg':
      return css`
        font-size: 1.25rem;
        line-height: 1.875rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
      `
    case 'body-bold':
      return css`
        font-size: 1rem;
        line-height: 1.25rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
      `
    case 'body-sm':
      return css`
        font-size: 0.875rem;
        line-height: 1.313rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
      `
    case 'body-xs':
      return css`
        font-size: 0.75rem;
        line-height: 1.125rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
      `
    case 'body-xxs':
      return css`
        font-size: 0.625rem;
        line-height: 0.938rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
      `
    default:
      return css`
        font-size: 1rem;
        line-height: 1.25rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
      `
  }
}

export const Container = styled('h1').attrs<TypeStyledTypography>(
  ({ type }) => ({
    as: translateElement[type]
  })
)<TypeStyledTypography>`
  ${({ asComport, type }) => getStylesTypography(asComport ?? type)}
  color: currentColor;
`
