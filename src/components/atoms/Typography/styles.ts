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
      return css``
    default:
      return css``
  }
}

export const Container = styled('h1').attrs<TypeStyledTypography>(
  ({ type }) => ({
    as: translateElement[type]
  })
)<TypeStyledTypography>`
  ${({ asComport }) => getStyles(asComport ?? 'body')}
  color: currentColor;
  margin: 0;
`
