import styled, { css } from 'styled-components'
import { shade } from 'polished'

import { ThemeType } from 'types/system'

interface ContainerProps {
  themeSite: ThemeType
}

interface SideBarProps {
  menu: boolean
}

export const Redirect = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;

  > div {
    height: auto;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
  }
`

export const Container = styled('div')<ContainerProps>`
  ${({ themeSite }) => css`
    background-color: ${({ theme }) =>
      themeSite === 'dark'
        ? shade(0.8, theme.colors.gray[900])
        : theme.colors.gray[200]};
  `}

  width: 100vw;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: 'sideBar head' 'sideBar body';

  @media (max-width: 600px) {
    grid-template-columns: 0px 1fr;
  }
`

export const SideBar = styled('div')<SideBarProps>`
  ${({ menu }) => css`
    grid-area: sideBar;
    z-index: 2;
    margin-left: ${menu ? '0' : '-60'}px;

    @media (min-width: 420px) {
      margin-left: 0;
    }
  `}
`

export const Top = styled.div`
  position: relative;
  overflow: auto;
  grid-area: head;
`

export const Body = styled.div`
  grid-area: body;
  position: relative;
  overflow: auto;
`
