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
  top: 0;
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  grid-template-areas: 'menu title theme';
`
