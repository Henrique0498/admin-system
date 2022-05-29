import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { ThemeType } from 'types/system'

interface ContainerProps {
  themeSite: ThemeType
}

export const Container = styled('nav')<ContainerProps>`
  ${({ themeSite }) => css`
    background: ${({ theme }) =>
      themeSite === 'dark'
        ? lighten(0.04, theme.colors.gray[900])
        : theme.colors.white};
    transition: all ${({ theme }) => theme.animation.duration.medium};
  `}

  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding-left: 10px;

  & > button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    gap: 10px;
    cursor: pointer;

    h2 {
      font-size: 2.4rem;
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.gray[500]} 50%,
        ${({ theme }) => theme.colors.gray[600]} 50%
      );
      background-size: 200%;
      transition: all ${({ theme }) => theme.animation.duration.xxSlow};
      background-position: 0%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    :hover {
      h2 {
        background-position: 100%;
        transition: all ${({ theme }) => theme.animation.duration.xxSlow};
      }
    }

    .icon {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 3.2rem;
      color: ${({ theme }) => theme.colors.gray[500]};
      border: 2px solid currentColor;
      transition: all 0.8s;
      perspective: 800px;

      ::after {
        content: '';
        width: 2px;
        height: 30px;
        position: absolute;
        box-shadow: 2px 0 currentColor, -2px 0 currentColor;
      }
    }

    &:hover {
      .icon {
        transition: all 0.8s;
        transform: rotate3d(10, 10, 10, 360deg);
        color: ${({ theme }) => theme.colors.gray[600]};
      }
    }
  }
`
