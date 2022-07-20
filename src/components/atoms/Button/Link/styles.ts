import { transparentize } from 'polished'
import styled, { css } from 'styled-components'
import { ColorsType } from 'types/system'

interface ContainerProps {
  size: SizeType
  color: ColorsType
}

type SizeType = 'small' | 'medium' | 'large'

function getPadding(size: SizeType) {
  switch (size) {
    case 'small':
      return '0.375rem 0.75rem'
    case 'large':
      return '1rem 2rem'
    default:
      return '0.625rem 1.25rem'
  }
}

function getFontSize(size: SizeType) {
  switch (size) {
    case 'small':
      return '0.75rem'
    case 'large':
      return '1rem'
    default:
      return '0.875rem'
  }
}

export const Container = styled.button<ContainerProps>`
  ${({ size, color }) => css`
    padding: ${getPadding(size)};
    font-size: ${getFontSize(size)};
    color: ${({ theme }) => theme.colors[color][500]};

    :hover {
      background: ${({ theme }) =>
        transparentize(0.9, theme.colors[color][500])};
    }
  `}
  border-radius: 4px;
  font-weight: 400;
  user-select: none;
  transition: ${({ theme }) => theme.animation.duration.medium};
  position: relative;

  :focus,
  :hover {
    background-position-x: 98%;
  }

  :focus {
    box-shadow: 0 0 0 2px
      ${({ theme }) => transparentize(0.5, theme.colors.violet[500])};
  }
`
