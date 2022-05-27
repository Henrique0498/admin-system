import styled, { css } from 'styled-components'

interface ContainerProps {
  menu: boolean
}

export const Container = styled('nav')<ContainerProps>`
  ${({ menu }) => css`
    width: ${menu ? '250' : '60'}px;
    height: 100%;

    .icon {
      display: flex;
      padding: 0 10px;
      align-items: center;
      width: ${menu ? '250' : '60'}px;
      height: 60px;

      h2 {
        padding-left: 10px;
        display: ${menu ? 'block' : 'none'};
        color: ${({ theme }) => theme.colors.white};
        font-size: 16px;
      }
    }
  `}
`
