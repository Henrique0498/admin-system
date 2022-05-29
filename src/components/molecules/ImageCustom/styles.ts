import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

interface ContainerProps {
  width?: number
  height?: number
}

function setSize(size?: number) {
  if (!size) {
    return '100%'
  }
  return `${size}px`
}

export const Container = styled('div')<ContainerProps>`
  ${({ width, height }) => css`
    width: ${setSize(width)};
    height: ${setSize(height)};
  `}
  position: relative;

  & * {
    pointer-events: none;
  }
`

export const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) =>
    transparentize(0.8, theme.colors.gray[500])};
`
