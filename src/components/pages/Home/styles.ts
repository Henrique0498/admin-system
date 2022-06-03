import styled from 'styled-components'

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
`

export const Describe = styled.p`
  grid-area: subTitle;
  font-size: 1em;
  font-weight: 600;
  padding: 16px 16px;
  padding-top: 0;
`

export const Button = styled.div`
  grid-area: button;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Graph = styled.div`
  grid-area: graph;

  canvas {
    transform: translateY(6px) scaleX(1);
  }
`
