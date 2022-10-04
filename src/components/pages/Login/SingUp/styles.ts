import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
`

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.violet[500]};
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  user-select: none;
`

export const Body = styled.form`
  display: grid;
  padding: 1rem 1rem 0rem;

  .container_input {
    display: grid;
    gap: 1.375rem;
    padding-top: 0.375rem;
  }

  .container_checkBox {
    display: flex;
  }

  .container_button {
    display: flex;
    justify-content: center;
  }
`
