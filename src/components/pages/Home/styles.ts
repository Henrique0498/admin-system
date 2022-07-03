import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

interface ButtonProps {
  active: boolean
}

export const Container = styled.div`
  height: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: start;
`

export const CardLarge = styled.div`
  overflow: hidden;
  position: relative;
  transition: all ${({ theme }) => theme.animation.duration.slow};
  width: 1200px;
  max-width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'title button'
    'subTitle button'
    'graph graph';

  :hover {
    transform: scale(1.04);
  }
`

export const Title = styled.h2`
  grid-area: title;
  font-size: 1.4em;
  font-weight: 600;
  padding: 16px 16px;
  padding-bottom: 10px;
`

export const SubTitle = styled.p`
  grid-area: subTitle;
  font-size: 1em;
  font-weight: 600;
  padding: 16px 16px;
  padding-top: 0;
`

export const Button = styled.div<ButtonProps>`
  ${({ active }) => css`
    ::before {
      top: ${active ? '44' : '6'}px;
    }
  `}
  grid-area: button;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  button {
    padding: 4px 0;
    width: 120px;
    margin: 4px 0;
    border-radius: 16px;
  }

  ::before {
    content: '';
    position: absolute;
    width: 110px;
    height: 34px;
    margin: 4px 0;
    border-radius: 16px;
    transition: all ${({ theme }) => theme.animation.duration.medium};
    background: ${({ theme }) => transparentize(0.8, theme.colors.gray[500])};
  }
`

export const Graph = styled.div`
  grid-area: graph;
  max-height: 400px;

  canvas {
    transform: translateY(6px) scaleX(1);
  }
`
