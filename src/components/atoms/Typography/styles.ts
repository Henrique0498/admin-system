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
  'body-sm': 'p',
  'body-xs': 'p',
  'body-xxs': 'p'
}

function getStyles(type: TypeTypographyElement) {
  switch (type) {
    case 'h1':
      return css`
        font-size: 4rem;
        line-height: 5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
      `
    case 'h2':
      return css`
        font-size: 3rem;
        line-height: 3.75rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
      `
    case 'h3':
      return css`
        font-size: 2.125rem;
        line-height: 2.625rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
      `
    case 'h4':
      return css`
        font-size: 1.5rem;
        line-height: 2.875rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
      `
    case 'h5':
      return css`
        font-size: 1.25rem;
        line-height: 1.625rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
      `
    case 'h6':
      return css`
        font-size: 1rem;
        line-height: 1.25rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
      `
    default:
      return css``
  }
}

export const Container = styled('h1').attrs<TypeStyledTypography>(
  ({ type }) => ({
    as: translateElement[type]
  })
)<TypeStyledTypography>`
  ${({ asComport, type }) => getStyles(asComport ?? type)}
  color: currentColor;
  margin: 0;
`
