import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
`

export const Background = styled.div`
  color: ${({ theme }) => theme.colors.purple[200]};
  height: calc(100% - 2rem);
  position: absolute;
  width: calc(100% - 2rem);
  z-index: -1;

  .background-icon_top_right {
    position: absolute;
    right: 0;
    top: 0;
  }

  .background-icon_bottom_left {
    bottom: 0;
    left: 0;
    position: absolute;
    transform: rotate(180deg);
  }
`

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.violet[500]};
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  user-select: none;
  z-index: 10;
`

export const Body = styled.form`
  display: grid;
  padding: 0rem 1rem;
  z-index: 12;

  .container_input {
    display: grid;
    gap: 1.375rem;
    padding-top: 0.375rem;
  }

  .recover-password {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0;
    width: 100%;
  }

  .containerButton {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
`
