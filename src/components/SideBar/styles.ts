import styled, { css } from 'styled-components'
import { darken, transparentize } from 'polished'

interface ContainerProps {
  menu: boolean
}

export const Container = styled('nav')<ContainerProps>`
  ${({ menu }) => css`
    width: ${menu ? '250' : '60'}px;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => darken(0.22, theme.colors.blue[900])} 0%,
      ${({ theme }) => darken(0.24, theme.colors.blue[900])} 100%
    );

    .icon {
      display: grid;
      grid-template-columns: 60px 1fr 40px;
      width: ${menu ? '250' : '60'}px;
      height: 60px;
      overflow: hidden;

      .logo {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      h2 {
        min-width: 100px;
        height: 60px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        color: ${({ theme }) => theme.colors.white};
        font-size: 16px;
      }
    }

    .user {
      display: flex;
      align-items: center;
      width: ${menu ? '250' : '60'}px;
      flex-direction: ${menu ? 'column' : 'row'};
      min-height: 70px;

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

      .info h2 {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.white};
        font-size: 16px;
      }
    }
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const List = styled.div`
  width: 100%;
  margin: 10px 0;

  > p {
    padding: 0 10px;
    text-transform: capitalize;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.purple[500]};
  }
`

export const Nav = styled('ul')<ContainerProps>`
  list-style: none;
  width: 100%;

  li {
    cursor: pointer;
    padding: 0 10px;
    margin-top: 6px;

    & .content {
      width: 100%;
      color: ${({ theme }) => theme.colors.gray[400]};
      min-width: 40px;
      height: 40px;
      border-radius: 8px;
      display: grid;
      grid-template-columns: 40px 1fr 0px;
      font-size: 16px;
      text-transform: capitalize;
      position: relative;

      :hover {
        color: ${({ theme }) => theme.colors.gray[200]};
        background: ${({ theme }) =>
          transparentize(0.9, theme.colors.blue[600])};
      }
    }

    &:hover .content {
      background: linear-gradient(
        90deg,
        ${({ theme }) => darken(0.16, theme.colors.blue[900])} 0%,
        ${({ theme }) => darken(0.17, theme.colors.blue[900])} 100%
      );
    }

    &.active .content {
      color: ${({ theme }) => theme.colors.gray[50]};
      background: linear-gradient(
        90deg,
        ${({ theme }) => darken(0.12, theme.colors.blue[900])} 0%,
        ${({ theme }) => darken(0.13, theme.colors.blue[900])} 100%
      );
    }

    .iconLi {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      display: flex;
      height: 40px;
      align-items: center;
      justify-content: space-between;
      padding: 0 6px;
    }

    .list {
      position: relative;
      display: inline-block;
    }

    .list > div {
      position: absolute;
      width: 200px;
      height: 400px;
      left: 8px;
      display: none;
      background: linear-gradient(
        -45deg,
        ${({ theme }) => darken(0.24, theme.colors.blue[900])} 10%,
        ${({ theme }) => darken(0.2, theme.colors.blue[900])} 80%
      );
      border-radius: 0 8px 8px 0px;
    }

    :hover .list > div {
      display: block;
      z-index: 10;
    }
  }
`
