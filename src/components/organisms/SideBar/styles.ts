import styled, { css } from 'styled-components'
import { darken, transparentize } from 'polished'

interface ContainerProps {
  menu: boolean
}

export const Container = styled('nav')<ContainerProps>`
  ${({ menu }) => css`
    width: ${menu ? '280' : '60'}px;
    min-height: 100%;
    background: linear-gradient(
      135deg,
      rgb(17, 24, 39) 30%,
      ${darken(0.08, 'rgb(17, 24, 39)')} 100%
    );
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Head = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr auto;
  width: 100%;
  height: 60px;
  overflow: hidden;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 120px;

    h3 {
      font-size: 16px;
    }
  }
`

export const User = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  min-height: 70px;
  padding: 13px 0;

  .photo {
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & > div {
      border-radius: 50% !important;
      overflow: hidden;
    }
  }

  .info {
    min-width: 240px;
    min-height: 80px;
    padding-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 16px;
    }
  }
`

export const List = styled.div`
  width: 100%;
  margin: 10px 0;
`

export const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  & > .describe {
    text-transform: capitalize;
    padding: 0 32px;

    h6 {
      color: ${({ theme }) => theme.colors.purple[500]};
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1.6px;
      font-size: 12px;
    }

    p {
      color: ${({ theme }) => theme.colors.gray[400]};
      font-size: 11px;
    }
  }
`

export const Li = styled('li')<ContainerProps>`
  ${({ menu }) => css`
    display: grid;
    grid-template-columns: ${menu ? '12px 1fr 12px' : '8px 1fr 8px'};

    & > .container {
      padding: ${menu ? '10px 16px' : '0px'};
      padding-right: ${menu ? '6px' : '0px'};
      justify-content: center;
    }

    .menuContainer .list {
      left: ${menu ? '10' : '8'}px;
    }
  `}

  max-width: 100%;
  margin-top: 4px;
  grid-template-areas: 'null container menu';
  color: ${({ theme }) => theme.colors.gray[400]};

  & > .container {
    grid-area: container;
    min-height: 44px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all ${({ theme }) => theme.animation.duration.medium};

    :hover {
      color: ${({ theme }) => theme.colors.gray[100]};
      background: linear-gradient(
        90deg,
        ${({ theme }) =>
            transparentize(0.5, darken(0.07, theme.colors.blue[900]))}
          0%,
        ${({ theme }) =>
            transparentize(0.5, darken(0.12, theme.colors.blue[900]))}
          100%
      );
    }

    &.active {
      color: ${({ theme }) => theme.colors.gray[50]};
      background: linear-gradient(
        90deg,
        ${({ theme }) =>
            transparentize(0.2, darken(0.07, theme.colors.blue[900]))}
          0%,
        ${({ theme }) =>
            transparentize(0.2, darken(0.12, theme.colors.blue[900]))}
          100%
      );
    }

    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text {
        min-width: 100px;
        font-size: 11px;
        text-transform: capitalize;

        .title {
          font-size: 13px;
        }
      }
    }
  }

  & > div.container.active {
    background: linear-gradient(
      90deg,
      ${({ theme }) =>
          transparentize(0.7, darken(0.07, theme.colors.blue[900]))}
        0%,
      ${({ theme }) =>
          transparentize(0.7, darken(0.12, theme.colors.blue[900]))}
        100%
    );
  }

  .menuContainer {
    grid-area: menu;
    height: 100%;
    position: relative;

    .list {
      width: 200px;
      padding-bottom: 4px;
      position: absolute;
      background: linear-gradient(
        -45deg,
        ${({ theme }) => darken(0.24, theme.colors.blue[900])} 10%,
        ${({ theme }) => darken(0.2, theme.colors.blue[900])} 80%
      );
      border-radius: 0 8px 8px 0px;
      display: none;
      z-index: 10;
    }
  }

  :hover .menuContainer .list {
    display: block;
  }
`
export const Icon = styled('div')<ContainerProps>`
  ${({ menu }) => css`
    margin-right: ${menu ? '16' : '0'}px;
    height: ${menu ? '100%' : '40px'};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
