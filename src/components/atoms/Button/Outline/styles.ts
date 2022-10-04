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
      return '0.75rem 1.5rem'
  }
}

export const Container = styled.button<ContainerProps>`
  ${({ size, color }) => css`
    background: linear-gradient(
      90deg,
      transparent 50%,
      ${({ theme }) => theme.colors[color][500]} 50%
    );
    border: 1px solid ${({ theme }) => theme.colors[color][500]};
    color: ${({ theme }) => theme.colors[color][500]};
    padding: ${getPadding(size)};
  `}
  align-items: center;
  background-size: 210%;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  transition: ${({ theme }) => theme.animation.duration.medium};
  user-select: none;
  :focus,
  :hover {
    background-position-x: 98%;
    color: ${({ theme }) => theme.colors.white};
  }

  :focus {
    box-shadow: 0 0 0 2px
      ${({ theme }) => transparentize(0.5, theme.colors.violet[500])};
  }
`
