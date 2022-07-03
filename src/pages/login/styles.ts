import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  background-image: url('/img/background/login.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100% 100%;
`

export const RecoverPassword = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;
  width: 860px;
  height: 400px;
  top: calc(50vh - 280px);
  transform: scale(0.9);
`

export const SingContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[50]};
  border-radius: 4px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: all 1s;
  position: absolute;
`

export const SingInCard = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.violet[500]} 0%,
    ${({ theme }) => theme.colors.violet[600]} 50%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  h2 {
    font-size: 1.75rem;
  }

  p {
    padding: 1rem 0 2rem;
    margin: 0;
  }

  button {
    border-color: white;
    color: white;
    background: linear-gradient(90deg, transparent 50%, white 50%);
    background-size: 210%;

    :hover {
      background-position: 100%;
      color: ${({ theme }) => theme.colors.violet[600]};
    }
  }
`
