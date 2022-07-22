import { transparentize } from 'polished'
import styled, { css } from 'styled-components'
import { ColorsType } from 'types/system'

interface ContainerProps {
  size: SizeType
  color: ColorsType
}

type SizeType = 'small' | 'medium' | 'large'

export const Container = styled.button<ContainerProps>`
  ${({ color }) => css`
    font-size: initial;
    padding: 0 0.25rem;
    margin: 0 0.25rem;
    color: ${({ theme }) => theme.colors[color][500]};

    :hover {
      background: ${({ theme }) =>
        transparentize(0.9, theme.colors[color][500])};
    }
  `}
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  transition: ${({ theme }) => theme.animation.duration.medium};
  position: relative;
`
