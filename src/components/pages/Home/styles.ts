import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  padding: 16px;
`

export const CardLarge = styled.div`
  overflow: hidden;
  transition: all ${({ theme }) => theme.animation.duration.slow};

  :hover {
    transform: scale(1.005);
  }
`
