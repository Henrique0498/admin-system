import { getStylesTypography } from 'components/atoms/Typography/styles'
import styled, { css } from 'styled-components'
import { TypeStylesButtonLink } from '../types'

export const Container = styled.button<TypeStylesButtonLink>`
  ${({ color, typeText }) => css`
    color: ${({ theme }) => theme.colors[color][500]};
    ${getStylesTypography(typeText)}

    :hover {
      color: ${({ theme }) => theme.colors[color][600]};
    }
  `}
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: ${({ theme }) => theme.animation.duration.medium};
  user-select: none;
`
