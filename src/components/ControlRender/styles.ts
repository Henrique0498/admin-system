import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`
