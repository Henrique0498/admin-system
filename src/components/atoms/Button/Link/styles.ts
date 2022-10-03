import styled, { css } from 'styled-components'
import { ColorsType } from 'types/system'

interface ContainerProps {
  color: ColorsType
}

export const Container = styled.button<ContainerProps>`
  ${({ color }) => css`
    color: ${({ theme }) => theme.colors[color][500]};

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
