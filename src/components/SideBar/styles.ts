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

    .user {
      display: flex;
      align-items: center;
      width: ${menu ? '250' : '60'}px;
      flex-direction: ${menu ? 'column' : 'row'};
      min-height: 60px;

      .userPhoto {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: ${menu ? '10' : '0'}px 0;
      }

      .photo {
        width: ${menu ? '80' : '44'}px;
        height: ${menu ? '80' : '44'}px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
      }
    }
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
`
