import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  display: flex;
`
export const Body = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`
