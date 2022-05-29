import styled, { css } from 'styled-components'

import { ThemeType } from 'types/system'

interface ContainerProps {
  themeSite: ThemeType
}

export const Container = styled('div')<ContainerProps>`
  ${({ themeSite }) => css`
    background-color: ${({ theme }) =>
      themeSite === 'dark' ? theme.colors.black : theme.colors.gray[200]};
  `}

  width: 100vw;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: 'sideBar head' 'sideBar body';
`

export const SideBar = styled.div`
  grid-area: sideBar;
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
