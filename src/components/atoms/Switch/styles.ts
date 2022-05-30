import styled, { css } from 'styled-components'

interface ContainerProps {
  value: boolean
}

export const Container = styled('label')<ContainerProps>`
  ${({ value }) => css`
    .switch {
      transform: translateX(${value ? '2' : '20'}px);
    }
  `}

  padding: 0;

  .switch {
    transition: all 150ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
